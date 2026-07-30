// ============================
// STATE
// ============================

const propState = {
    page: 1,
    pageSize: 6,
    favoritesOnly: false
};

const PROP_FAV_KEY = "ir_property_favorites";

let cardsData = [];


// ============================
// FAVORITES (localStorage)
// ============================

function getPropFavorites() {
    try {
        return new Set(JSON.parse(localStorage.getItem(PROP_FAV_KEY)) || []);
    } catch (e) {
        return new Set();
    }
}

function savePropFavorites(set) {
    localStorage.setItem(PROP_FAV_KEY, JSON.stringify([...set]));
}

function togglePropFavorite(id) {
    const favs = getPropFavorites();
    if (favs.has(id)) {
        favs.delete(id);
    } else {
        favs.add(id);
    }
    savePropFavorites(favs);
    renderProperties();
}


// ============================
// HELPERS
// ============================

function debounceProp(fn, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function buildCardsData() {
    const cols = Array.from(document.querySelectorAll(".prop-card-col"));
    cardsData = cols.map(el => ({
        id: el.dataset.id,
        el,
        type: el.dataset.type,
        status: el.dataset.status,
        price: parseInt(el.dataset.price, 10),
        beds: parseInt(el.dataset.beds, 10),
        date: el.dataset.date,
        location: el.dataset.location
    }));
}


// ============================
// FILTER + SORT PIPELINE
// ============================

function getFilteredCards() {
    const search = document.getElementById("f-search").value.trim().toLowerCase();
    const type = document.getElementById("f-type").value;
    const status = document.getElementById("f-status").value;
    const priceRange = document.getElementById("f-price").value;
    const minBeds = parseInt(document.getElementById("f-beds").value, 10);
    const sort = document.getElementById("f-sort").value;

    let minPrice = 0, maxPrice = Infinity;
    if (priceRange) {
        const parts = priceRange.split("-");
        minPrice = parseInt(parts[0], 10);
        maxPrice = parseInt(parts[1], 10);
    }

    const favs = getPropFavorites();

    let filtered = cardsData.filter(card => {
        const matches =
            (!search || card.location.includes(search)) &&
            (!type || card.type === type) &&
            (!status || card.status === status) &&
            (card.price >= minPrice && card.price <= maxPrice) &&
            (card.beds >= minBeds) &&
            (!propState.favoritesOnly || favs.has(card.id));
        return matches;
    });

    if (sort === "asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return filtered;
}


// ============================
// RENDER
// ============================

function renderProperties() {
    const grid = document.getElementById("prop-grid");
    const noResults = document.getElementById("no-results");
    const favs = getPropFavorites();

    const filtered = getFilteredCards();
    const totalPages = Math.max(1, Math.ceil(filtered.length / propState.pageSize));

    if (propState.page > totalPages) propState.page = totalPages;

    const start = (propState.page - 1) * propState.pageSize;
    const pageItems = filtered.slice(start, start + propState.pageSize);

    // detach all cards without destroying them
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    if (pageItems.length === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
        pageItems.forEach(card => grid.appendChild(card.el));
    }

    // sync favorite icons for every card (not just visible ones)
    cardsData.forEach(card => {
        const btn = card.el.querySelector(".prop-fav-btn");
        if (!btn) return;
        const icon = btn.querySelector("i");
        const isFav = favs.has(card.id);
        icon.classList.toggle("fa-solid", isFav);
        icon.classList.toggle("fa-regular", !isFav);
        btn.classList.toggle("is-active", isFav);
    });

    updateResultsText(filtered.length);
    renderPagination(totalPages);
    renderActiveChips();
}


// ============================
// RESULTS TEXT
// ============================

function updateResultsText(count) {
    const el = document.getElementById("prop-count");
    if (!el) return;
    const total = cardsData.length;
    if (propState.favoritesOnly) {
        el.textContent = `${count} saved ${count === 1 ? "property" : "properties"}`;
    } else {
        el.textContent = `Showing ${count} of ${total} residences currently available`;
    }
}


// ============================
// PAGINATION
// ============================

function renderPagination(totalPages) {
    const wrap = document.getElementById("propPagination");
    if (!wrap) return;

    if (totalPages <= 1) {
        wrap.innerHTML = "";
        return;
    }

    let html = `<button data-page="prev" ${propState.page === 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button data-page="${i}" class="${i === propState.page ? "active" : ""}">${i}</button>`;
    }

    html += `<button data-page="next" ${propState.page === totalPages ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>`;

    wrap.innerHTML = html;

    wrap.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const val = btn.dataset.page;
            if (val === "prev") propState.page = Math.max(1, propState.page - 1);
            else if (val === "next") propState.page = Math.min(totalPages, propState.page + 1);
            else propState.page = +val;
            renderProperties();
            document.getElementById("prop-grid").scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}


// ============================
// ACTIVE FILTER CHIPS
// ============================

function renderActiveChips() {
    const wrap = document.getElementById("activeChips");
    if (!wrap) return;

    const chips = [];

    const search = document.getElementById("f-search").value.trim();
    const type = document.getElementById("f-type");
    const status = document.getElementById("f-status");
    const price = document.getElementById("f-price");
    const beds = document.getElementById("f-beds");

    if (search) chips.push({ key: "f-search", label: `"${search}"` });
    if (type.value) chips.push({ key: "f-type", label: type.options[type.selectedIndex].text });
    if (status.value) chips.push({ key: "f-status", label: status.options[status.selectedIndex].text });
    if (price.value) chips.push({ key: "f-price", label: price.options[price.selectedIndex].text });
    if (beds.value !== "0") chips.push({ key: "f-beds", label: beds.options[beds.selectedIndex].text });
    if (propState.favoritesOnly) chips.push({ key: "favorites", label: "Saved only" });

    if (chips.length === 0) {
        wrap.innerHTML = "";
        wrap.style.display = "none";
        return;
    }

    wrap.style.display = "flex";
    wrap.innerHTML = chips.map(c =>
        `<span class="filter-chip" data-chip-key="${c.key}">${c.label} <i class="fa-solid fa-xmark"></i></span>`
    ).join("");

    wrap.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            const key = chip.dataset.chipKey;
            if (key === "favorites") {
                propState.favoritesOnly = false;
                document.getElementById("favToggle").classList.remove("is-active");
            } else if (key === "f-search") {
                document.getElementById("f-search").value = "";
            } else if (key === "f-beds") {
                document.getElementById("f-beds").value = "0";
            } else {
                document.getElementById(key).value = "";
            }
            propState.page = 1;
            renderProperties();
        });
    });
}


// ============================
// PUBLIC FILTER ACTIONS (kept for existing onclick= attributes)
// ============================

function applyFilters() {
    propState.page = 1;
    renderProperties();
}

function resetFilters() {
    document.getElementById("f-search").value = "";
    document.getElementById("f-type").value = "";
    document.getElementById("f-status").value = "";
    document.getElementById("f-price").value = "";
    document.getElementById("f-beds").value = "0";
    document.getElementById("f-sort").value = "default";
    propState.favoritesOnly = false;
    propState.page = 1;
    const favBtn = document.getElementById("favToggle");
    if (favBtn) favBtn.classList.remove("is-active");
    renderProperties();
}


// ============================
// EVENT WIRING
// ============================

function initPropertyEvents() {
    document.getElementById("f-search").addEventListener("input", debounceProp(() => {
        propState.page = 1;
        renderProperties();
    }, 250));

    ["f-type", "f-status", "f-price", "f-beds", "f-sort"].forEach(id => {
        document.getElementById(id).addEventListener("change", () => {
            propState.page = 1;
            renderProperties();
        });
    });

    const favToggle = document.getElementById("favToggle");
    if (favToggle) {
        favToggle.addEventListener("click", () => {
            propState.favoritesOnly = !propState.favoritesOnly;
            favToggle.classList.toggle("is-active", propState.favoritesOnly);
            propState.page = 1;
            renderProperties();
        });
    }

    // Event delegation for favorite-heart buttons (survives DOM re-ordering)
    document.getElementById("prop-grid").parentElement.addEventListener("click", (e) => {
        const btn = e.target.closest(".prop-fav-btn");
        if (!btn) return;
        e.preventDefault();
        togglePropFavorite(btn.dataset.favId);
    });
}


// ============================
// INIT
// ============================

document.addEventListener("DOMContentLoaded", () => {
    buildCardsData();
    initPropertyEvents();
    renderProperties();
});