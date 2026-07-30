// ============================
// JOURNAL DATA
// (kept in sync with script.js on journal.html)
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
        image: "assests/journal images/Inside The World's Most Expensive Estates.jfif",
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
        image: "assests/journal images/interior design trend.jfif",
        description: "How curated lighting elevates every room into a design statement.",
        date: "2025-03-28"
    },
    {
        id: 16,
        title: "Natural Materials Shaping Modern Interiors",
        category: "Design",
        image: "assests/journal images/The Beauty Of Minimal Interiors.webp",
        description: "Stone, wood and linen bring warmth to contemporary luxury spaces.",
        date: "2025-02-09"
    },
    {
        id: 17,
        title: "A Week In The Life Of A Luxury Homeowner",
        category: "Lifestyle",
        image: "assests/journal images/Luxury Living Around The Globe.jfif",
        description: "An inside look at the daily rituals of premium residential living.",
        date: "2025-07-10"
    },
    {
        id: 18,
        title: "Wellness Retreats Built Into The Home",
        category: "Lifestyle",
        image: "assests/journal images/Private Island Luxury Homes.jfif",
        description: "Spas, gyms and meditation spaces designed for everyday luxury.",
        date: "2025-05-16"
    }
];


// ============================
// HELPERS (shared logic with journal.js)
// ============================

function estimateReadTime(text) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(2, Math.round((words * 12) / 200));
    return minutes + " min read";
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}


// ============================
// GET ID FROM URL
// ============================

let urlParams = new URLSearchParams(window.location.search);
let articleId = Number(urlParams.get("id"));


// ============================
// FIND ARTICLE
// ============================

let article = journals.find(item => item.id === articleId);


// ============================
// RENDER
// ============================

function renderArticle() {
    const heroSection = document.querySelector(".detail-hero");
    const breadcrumb = document.getElementById("articleBreadcrumb");
    const metaWrap = document.getElementById("articleMeta");
    const relatedSection = document.getElementById("relatedSection");

    if (!article) {
        document.getElementById("articleTitle").innerHTML = "Article Not Found";
        document.getElementById("articleCategory").innerHTML =
            "This story may have been moved or no longer exists.";
        document.getElementById("articleImage").style.display = "none";
        document.getElementById("articleDescription").innerHTML = "";
        if (metaWrap) metaWrap.style.display = "none";
        if (relatedSection) relatedSection.style.display = "none";
        return;
    }

    // Title, category, description
    document.getElementById("articleTitle").innerHTML = article.title;
    document.getElementById("articleCategory").innerHTML = article.category;
    document.getElementById("articleImage").src = article.image;
    document.getElementById("articleImage").alt = article.title;
    document.getElementById("articleDescription").innerHTML = article.description;

    // Hero background image + overlay
    if (heroSection) {
        heroSection.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('${article.image}')`;
        heroSection.classList.add("detail-hero--image");
    }

    // Breadcrumb
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html">Home</a>
            <i class="fa-solid fa-angle-right"></i>
            <a href="journal.html">Journal</a>
            <i class="fa-solid fa-angle-right"></i>
            <span>${article.title}</span>
        `;
    }

    // Meta row: category, date, read time
    if (metaWrap) {
        metaWrap.innerHTML = `
            <span><i class="fa-regular fa-calendar"></i> ${formatDate(article.date)}</span>
            <span><i class="fa-regular fa-clock"></i> ${estimateReadTime(article.description)}</span>
            <span><i class="fa-solid fa-tag"></i> ${article.category}</span>
        `;
    }

    renderRelated();
}


// ============================
// RELATED STORIES
// ============================

function renderRelated() {
    const container = document.getElementById("relatedContainer");
    if (!container || !article) return;

    let related = journals.filter(a => a.category === article.category && a.id !== article.id);

    // fall back to other categories if fewer than 3 in the same one
    if (related.length < 3) {
        const others = journals.filter(a => a.category !== article.category && a.id !== article.id);
        related = related.concat(others).slice(0, 3);
    } else {
        related = related.slice(0, 3);
    }

    container.innerHTML = related.map(a => `
        <div class="col-lg-4 col-md-6">
            <div class="journal-card">
                <div class="journal-img-wrap">
                    <img src="${a.image}" class="journal-img" alt="${a.title}">
                </div>
                <div class="journal-card-content">
                    <p class="journal-category">${a.category}</p>
                    <h3>${a.title}</h3>
                    <p>${a.description}</p>
                    <a href="journal-detail.html?id=${a.id}" class="read-btn">Read Article</a>
                </div>
            </div>
        </div>
    `).join("");
}


document.addEventListener("DOMContentLoaded", renderArticle);