// ============================
// COUNTER (unchanged)
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {
        if (count < target) {
            count++;
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});


// ============================
// JOURNAL DATA
// ============================

let journals = [
    {
        id: 1,
        title: "The Art Of Modern Luxury Villas",
        category: "Architecture",
        image: "assests/journal images/modern luxury villa.jfif",
        description: "Explore extraordinary villas where architecture meets elegance and nature.",
        date: "2025-06-14"
    },
    {
        id: 2,
        title: "Luxury Interior Design Trends",
        category: "Design",
        image: "assests/journal images/interior design trend.jfif",
        description: "Discover timeless interiors created with art, comfort and sophistication.",
        date: "2025-07-02"
    },
    {
        id: 3,
        title: "World's Finest Luxury Destinations",
        category: "Lifestyle",
        image: "assests/journal images/World's Finest Luxury Destinations.webp",
        description: "Experience locations known for privacy and premium living.",
        date: "2025-05-21"
    },
    {
        id: 4,
        title: "Smart Homes Of The Future",
        category: "Architecture",
        image: "assests/journal images/Smart Homes Of The Future.jfif",
        description: "Technology is transforming luxury residences with intelligent solutions.",
        date: "2025-07-19"
    },
    {
        id: 5,
        title: "The Beauty Of Minimal Interiors",
        category: "Design",
        image: "assests/journal images/The Beauty Of Minimal Interiors.webp",
        description: "A journey into simple yet elegant luxury interior spaces.",
        date: "2025-04-30"
    },
    {
        id: 6,
        title: "Luxury Living Around The Globe",
        category: "Lifestyle",
        image: "assests/journal images/Luxury Living Around The Globe.jfif",
        description: "Stories from the world's most prestigious residential locations.",
        date: "2025-06-27"
    },
    {
        id: 7,
        title: "Inside The World's Most Expensive Estates",
        category: "Architecture",
        image: "assests/journal images/Rooftop Villas With Panoramic City Views.avif",
        description: "A journey through magnificent estates created for extraordinary living.",
        date: "2025-03-11"
    },
    {
        id: 8,
        title: "Oceanfront Residences And Coastal Living",
        category: "Lifestyle",
        image: "assests/journal images/Oceanfront Residences And Coastal Living.jfif",
        description: "Discover breathtaking homes surrounded by beautiful landscapes.",
        date: "2025-07-24"
    },
    {
        id: 9,
        title: "Classic European Mansion Design",
        category: "Design",
        image: "assests/journal images/Luxury Living Around The Globe.jfif",
        description: "The timeless beauty of traditional luxury architecture.",
        date: "2025-02-18"
    },
    {
        id: 10,
        title: "Private Island Luxury Homes",
        category: "Lifestyle",
        image: "assests/journal images/Private Island Luxury Homes.jfif",
        description: "Exclusive residences offering complete privacy and comfort.",
        date: "2025-05-05"
    },
    {
        id: 11,
        title: "The Future Of Sustainable Luxury Homes",
        category: "Architecture",
        image: "assests/journal images/The Future Of Sustainable Luxury Homes.jpg",
        description: "Modern homes combining luxury with sustainability.",
        date: "2025-07-27"
    },
    {
        id: 12,
        title: "Luxury Bedroom Interior Inspirations",
        category: "Design",
        image: "assests/journal images/Luxury Bedroom Interior Inspirations.jpg",
        description: "Elegant interiors designed for peaceful living.",
        date: "2025-01-30"
    },
    {
        id: 13,
        title: "Contemporary Glass Facades In Luxury Homes",
        category: "Architecture",
        image: "assests/journal images/Smart Homes Of The Future.jfif",
        description: "How floor-to-ceiling glass is redefining modern luxury architecture.",
        date: "2025-06-05"
    },
    {
        id: 14,
        title: "Rooftop Villas With Panoramic City Views",
        category: "Architecture",
        image: "assests/journal images/Inside The World's Most Expensive Estates.jfif",
        description: "Elevated residences designed around light, air and skyline views.",
        date: "2025-04-12"
    },
    {
        id: 15,
        title: "Statement Lighting For Luxury Interiors",
        category: "Design",
        image: "assests/journal images/Statement Lighting For Luxury Interiors.jfif",
        description: "How curated lighting elevates every room into a design statement.",
        date: "2025-03-28"
    },
    {
        id: 16,
        title: "Natural Materials Shaping Modern Interiors",
        category: "Design",
        image: "assests/journal images/Natural Materials Shaping Modern Interiors.jfif",
        description: "Stone, wood and linen bring warmth to contemporary luxury spaces.",
        date: "2025-02-09"
    },
    {
        id: 17,
        title: "A Week In The Life Of A Luxury Homeowner",
        category: "Lifestyle",
        image: "assests/journal images/A Week In The Life Of A Luxury Homeowner.jfif",
        description: "An inside look at the daily rituals of premium residential living.",
        date: "2025-07-10"
    },
    {
        id: 18,
        title: "Wellness Retreats Built Into The Home",
        category: "Lifestyle",
        image: "assests/journal images/Wellness Retreats Built Into The Home.jfif",
        description: "Spas, gyms and meditation spaces designed for everyday luxury.",
        date: "2025-05-16"
    }
];


// ============================
// STATE
// ============================

const state = {
    activeCategory: "all",
    searchTerm: "",
    sortBy: "newest",
    page: 1,
    pageSize: 6,
    showBookmarksOnly: false
};

const BOOKMARK_KEY = "ir_journal_bookmarks";

function getBookmarks() {
    try {
        return new Set(JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || []);
    } catch (e) {
        return new Set();
    }
}

function saveBookmarks(set) {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify([...set]));
}

function toggleBookmark(id) {
    const bookmarks = getBookmarks();
    if (bookmarks.has(id)) {
        bookmarks.delete(id);
    } else {
        bookmarks.add(id);
    }
    saveBookmarks(bookmarks);
    render();
}


// ============================
// HELPERS
// ============================

function estimateReadTime(text) {
    const words = text.trim().split(/\s+/).length;
    // luxury journal articles run long-form; base the estimate on a
    // typical 200 wpm reading pace applied to a full article multiplier
    const minutes = Math.max(2, Math.round((words * 12) / 200));
    return minutes + " min read";
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text, term) {
    if (!term) return text;
    const re = new RegExp("(" + escapeRegExp(term) + ")", "ig");
    return text.replace(re, "<mark>$1</mark>");
}

function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}


// ============================
// FILTER + SORT PIPELINE
// ============================

function getFilteredData() {
    let data = [...journals];
    const bookmarks = getBookmarks();

    if (state.showBookmarksOnly) {
        data = data.filter(a => bookmarks.has(a.id));
    }

    if (state.activeCategory !== "all") {
        data = data.filter(a => a.category === state.activeCategory);
    }

    if (state.searchTerm) {
        const term = state.searchTerm.toLowerCase();
        data = data.filter(a =>
            a.title.toLowerCase().includes(term) ||
            a.category.toLowerCase().includes(term) ||
            a.description.toLowerCase().includes(term)
        );
    }

    switch (state.sortBy) {
        case "newest":
            data.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case "oldest":
            data.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case "az":
            data.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case "za":
            data.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    return data;
}


// ============================
// RENDER CARDS
// ============================

function render() {
    const container = document.getElementById("journalContainer");
    if (!container) return;

    const filtered = getFilteredData();
    const totalPages = Math.max(1, Math.ceil(filtered.length / state.pageSize));

    if (state.page > totalPages) state.page = totalPages;

    const start = (state.page - 1) * state.pageSize;
    const items = filtered.slice(start, start + state.pageSize);

    const noResults = document.getElementById("noResults");

    if (items.length === 0) {
        container.innerHTML = "";
        if (noResults) noResults.style.display = "block";
    } else {
        if (noResults) noResults.style.display = "none";

        const bookmarks = getBookmarks();

        container.innerHTML = items.map(article => {
            const isBookmarked = bookmarks.has(article.id);
            return `
<div class="col-lg-4 col-md-6 journal-fade-item">
    <div class="journal-card">
        <div class="journal-img-wrap">
            <img src="${article.image}" class="journal-img" alt="${article.title}">
            <button class="journal-bookmark-btn ${isBookmarked ? "is-active" : ""}"
                    data-id="${article.id}"
                    aria-label="Bookmark this story"
                    title="${isBookmarked ? "Remove bookmark" : "Save for later"}">
                <i class="fa-${isBookmarked ? "solid" : "regular"} fa-bookmark"></i>
            </button>
        </div>
        <div class="journal-card-content">
            <p class="journal-category">${article.category}</p>
            <h3>${highlight(article.title, state.searchTerm)}</h3>
            <p>${highlight(article.description, state.searchTerm)}</p>
            <div class="journal-meta">
                <span><i class="fa-regular fa-calendar"></i> ${formatDate(article.date)}</span>
                <span><i class="fa-regular fa-clock"></i> ${estimateReadTime(article.description)}</span>
            </div>
            <a href="journal-detail.html?id=${article.id}" class="read-btn">Read Article</a>
        </div>
    </div>
</div>`;
        }).join("");
    }

    renderPagination(totalPages, filtered.length);
    bindCardEvents();
    observeFadeIn();
}


// ============================
// PAGINATION
// ============================

function renderPagination(totalPages, totalCount) {
    const wrap = document.getElementById("journalPagination");
    const resultsText = document.getElementById("resultsText");

    if (resultsText) {
        resultsText.textContent = totalCount === 0
            ? "No stories found"
            : `Showing ${totalCount} ${totalCount === 1 ? "story" : "stories"}`;
    }

    if (!wrap) return;

    if (totalPages <= 1) {
        wrap.innerHTML = "";
        return;
    }

    let html = "";

    html += `<button data-page="prev" ${state.page === 1 ? "disabled" : ""}><i class="fa-solid fa-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button data-page="${i}" class="${i === state.page ? "active" : ""}">${i}</button>`;
    }

    html += `<button data-page="next" ${state.page === totalPages ? "disabled" : ""}><i class="fa-solid fa-chevron-right"></i></button>`;

    wrap.innerHTML = html;

    wrap.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const val = btn.dataset.page;
            if (val === "prev") state.page = Math.max(1, state.page - 1);
            else if (val === "next") state.page = Math.min(totalPages, state.page + 1);
            else state.page = +val;
            render();
            document.getElementById("journalContainer").scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}


// ============================
// CARD-LEVEL EVENTS (bookmarks)
// ============================

function bindCardEvents() {
    document.querySelectorAll(".journal-bookmark-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleBookmark(+btn.dataset.id);
        });
    });
}


// ============================
// SCROLL FADE-IN ANIMATION
// ============================

let fadeObserver = null;

function observeFadeIn() {
    if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".journal-fade-item").forEach(el => el.classList.add("is-visible"));
        return;
    }

    if (fadeObserver) fadeObserver.disconnect();

    fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".journal-fade-item:not(.is-visible)").forEach(el => fadeObserver.observe(el));
}


// ============================
// CATEGORY FILTER (kept for inline onclick compatibility)
// ============================

function filterJournal(category) {
    state.activeCategory = category;
    state.showBookmarksOnly = false;
    state.page = 1;

    document.querySelectorAll(".category-buttons button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });

    render();
}


// ============================
// WIRE UP CONTROLS
// ============================

function initControls() {
    // Search
    const search = document.getElementById("searchJournal");
    if (search) {
        search.addEventListener("keyup", debounce(function () {
            state.searchTerm = this.value.trim();
            state.page = 1;
            render();
        }, 250));
    }

    // Sort
    const sortSelect = document.getElementById("sortJournal");
    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            state.sortBy = this.value;
            state.page = 1;
            render();
        });
    }

    // Category buttons (data-driven, in addition to legacy onclick)
    document.querySelectorAll(".category-buttons button[data-category]").forEach(btn => {
        btn.addEventListener("click", () => filterJournal(btn.dataset.category));
    });

    // Bookmarks-only toggle
    const bookmarkToggle = document.getElementById("bookmarkFilter");
    if (bookmarkToggle) {
        bookmarkToggle.addEventListener("click", () => {
            state.showBookmarksOnly = !state.showBookmarksOnly;
            state.page = 1;
            bookmarkToggle.classList.toggle("is-active", state.showBookmarksOnly);
            document.querySelectorAll(".category-buttons button").forEach(b => b.classList.remove("active"));
            render();
        });
    }
}


// ============================
// PAGE LOAD
// ============================

document.addEventListener("DOMContentLoaded", () => {
    initControls();
    render();
});

// =======================================
// CONTACT FORM
// =======================================

// =======================================
// CONTACT FORM
// =======================================

const luxuryForm = document.getElementById("luxuryForm");
const successMessage = document.getElementById("successMessage");

if (luxuryForm) {

    luxuryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value.trim();

        // Validation
        if (
            fname === "" ||
            lname === "" ||
            email === "" ||
            phone === "" ||
            service === "" ||
            message === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation
        const phonePattern = /^[0-9]{10,15}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Success Message
        if (successMessage) {
            successMessage.classList.remove("d-none");

            setTimeout(function () {
                successMessage.classList.add("d-none");
            }, 4000);
        }

        // Reset Form
        luxuryForm.reset();

    });

}


// =======================================
// SMOOTH SCROLL
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =======================================
// BUTTON LOADING EFFECT
// =======================================

const submitBtn = document.querySelector(".submit-btn");

if (luxuryForm && submitBtn) {

    luxuryForm.addEventListener("submit", function () {

        submitBtn.innerHTML = "Sending...";
        submitBtn.disabled = true;

        setTimeout(function () {

            submitBtn.innerHTML = "Send Message";
            submitBtn.disabled = false;

        }, 2000);

    });

}

// =======================================
// INPUT BORDER EFFECT
// =======================================

const inputs = document.querySelectorAll(
    ".form-control, .form-select"
);

inputs.forEach(input => {

    input.addEventListener("focus", function () {

        this.style.borderColor = "#c9ac77";

    });

    input.addEventListener("blur", function () {

        this.style.borderColor = "#ddd";

    });

});


// =======================================
// HERO BUTTON SCROLL
// =======================================

const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {

    heroBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const contactSection = document.querySelector("#contact-form");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}