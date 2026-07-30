// ======================================
// PROPERTY DETAILS DATA
// ======================================

const properties = [

{
id:1,
title:"Clifton Seafront Villa",
price:"$2,450,000",
status:"FOR SALE",
location:"Clifton, Karachi",
description:"Luxury seafront villa with breathtaking views, premium interiors, swimming pool and smart home technology.",
beds:"5",
baths:"6",
area:"6200 sqft",
garage:"4",
images:[
"assests/listing img/clifton villa.jfif",
"assests/listing img/waterfront-villa.jpg",
"assests/listing img/penthouse.jfif",
"assests/listing img/skylinee penthouse.webp"
]
},

{
id:2,
title:"DHA Skyline Penthouse",
price:"$8,900 / mo",
status:"FOR RENT",
location:"DHA, Karachi",
description:"Modern penthouse with luxury finishes, rooftop lounge and skyline views.",
beds:"3",
baths:"4",
area:"3100 sqft",
garage:"2",
images:[
"assests/listing img/penthouse.jfif",
"assests/listing img/clifton villa.jfif",
"assests/listing img/waterfront-villa.jpg",
"assests/listing img/skylinee penthouse.webp"
]
},

{
id:3,
title:"Bahria Hills Estate",
price:"$5,120,000",
status:"NEW DEVELOPMENT",
location:"Bahria Town, Karachi",
description:"Luxury estate with landscaped gardens and premium architecture.",
beds:"6",
baths:"7",
area:"8400 sqft",
garage:"5",
images:[
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
]
},

{
id:4,
title:"Phase 6 Family House",
price:"$890,000",
status:"FOR SALE",
location:"Phase 6, DHA",
description:"Elegant family house with spacious rooms and modern design.",
beds:"4",
baths:"4",
area:"3800 sqft",
garage:"2",
images:[
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
]
},

{
id:5,
title:"Waterfront Boutique Villa",
price:"$5,500 / mo",
status:"FOR RENT",
location:"Clifton, Karachi",
description:"Luxury waterfront villa with private garden and pool.",
beds:"4",
baths:"5",
area:"4900 sqft",
garage:"2",
images:[
"assests/listing img/waterfront-villa.jpg",
"assests/listing img/clifton villa.jfif",
"assests/listing img/penthouse.jfif",
"assests/listing img/skylinee penthouse.webp"
]
},

{
id:6,
title:"Saddar Tower Penthouse",
price:"$3,600,000",
status:"NEW DEVELOPMENT",
location:"Saddar, Karachi",
description:"Premium penthouse with elegant interiors and panoramic city views.",
beds:"3",
baths:"3",
area:"2900 sqft",
garage:"2",
images:[
"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
]
},

{
id:7,
title:"Grand Garden Estate",
price:"$8,750,000",
status:"FOR SALE",
location:"Greenwich, CT",
description:"Magnificent estate featuring luxury interiors, gardens and pool.",
beds:"7",
baths:"8",
area:"10500 sqft",
garage:"6",
images:[
"https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
]
},

{
id:8,
title:"Aspen Contemporary Retreat",
price:"$3,500 / mo",
status:"FOR RENT",
location:"Aspen, CO",
description:"Contemporary luxury retreat with mountain views.",
beds:"4",
baths:"4",
area:"4700 sqft",
garage:"2",
images:[
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
]
},

{
id:9,
title:"Hillside Modern Estate",
price:"$4,250,000",
status:"NEW DEVELOPMENT",
location:"Beverly Hills, CA",
description:"Exclusive hillside estate with modern architecture and smart home features.",
beds:"5",
baths:"6",
area:"6200 sqft",
garage:"4",
images:[
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
]
},

{
id:10,
title:"Downtown Sky Residence",
price:"$1,890,000",
status:"FOR SALE",
location:"Miami, FL",
description:"Luxury downtown residence with skyline and waterfront views.",
beds:"2",
baths:"2",
area:"2050 sqft",
garage:"1",
images:[
"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200",
"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200"
]
},

{
id:11,
title:"Malibu Oceanfront Villa",
price:"$18,000 / mo",
status:"FOR RENT",
location:"Malibu, CA",
description:"Oceanfront villa with private beach access and luxury amenities.",
beds:"6",
baths:"7",
area:"8400 sqft",
garage:"4",
images:[
"https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200",
"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
]
},

{
id:12,
title:"Skyline Penthouse",
price:"$3,150,000",
status:"NEW DEVELOPMENT",
location:"Manhattan, NY",
description:"Luxury Manhattan penthouse with floor-to-ceiling windows and skyline views.",
beds:"3",
baths:"3",
area:"3100 sqft",
garage:"2",
images:[
"assests/listing img/skylinee penthouse.webp",
"assests/listing img/penthouse.jfif",
"assests/listing img/clifton villa.jfif",
"assests/listing img/waterfront-villa.jpg"
]
}

];

// ======================================
// GET PROPERTY ID
// ======================================

const params = new URLSearchParams(window.location.search);

const propertyId = Number(params.get("id")) || 1;

// ======================================
// FIND PROPERTY
// ======================================

const property = properties.find(item => item.id === propertyId);

// ======================================
// DISPLAY PROPERTY DETAILS
// ======================================

if(property){

document.getElementById("propertyTitle").innerHTML = property.title;

document.getElementById("propertyPrice").innerHTML = property.price;

document.getElementById("propertyStatus").innerHTML = property.status;

document.getElementById("propertyLocation").innerHTML = property.location;

document.getElementById("propertyDescription").innerHTML = property.description;

document.getElementById("propertyBeds").innerHTML = property.beds;

document.getElementById("propertyBaths").innerHTML = property.baths;

document.getElementById("propertyArea").innerHTML = property.area;

document.getElementById("propertyGarage").innerHTML = property.garage;

// Main Image

document.getElementById("mainImage").src = property.images[0];

}
// ======================================
// IF PROPERTY NOT FOUND
// ======================================

if (!property) {
    window.location.href = "listing.html";
}

// ======================================
// PAGE TITLE
// ======================================

document.title = property.title + " | Imperial Residencies";

// ======================================
// CREATE THUMBNAILS
// ======================================

const thumbnailContainer = document.querySelector(".property-thumbnails");

if (thumbnailContainer) {

    thumbnailContainer.innerHTML = "";

    property.images.forEach((image, index) => {

        const img = document.createElement("img");

        img.src = image;

        img.className = "thumb";

        if (index === 0) {
            img.classList.add("active-thumb");
        }

        img.onclick = function () {
            changeImage(this);
        };

        thumbnailContainer.appendChild(img);

    });

}

// ======================================
// CHANGE MAIN IMAGE
// ======================================

function changeImage(element) {

    const mainImage = document.getElementById("mainImage");

    mainImage.src = element.src;

    document.querySelectorAll(".thumb").forEach(img => {
        img.classList.remove("active-thumb");
    });

    element.classList.add("active-thumb");

}

// ======================================
// SMOOTH SCROLL
// ======================================

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

// ======================================
// CONTACT FORM
// ======================================

const form = document.querySelector(".contact-form-box form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your inquiry has been sent successfully.");

        form.reset();

    });

}

// ======================================
// PROPERTY SHARE
// ======================================

function shareProperty() {

    if (navigator.share) {

        navigator.share({

            title: property.title,

            text: property.description,

            url: window.location.href

        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Property link copied to clipboard.");

    }

}

// ======================================
// SCROLL TO TOP
// ======================================

const scrollBtn = document.querySelector(".scroll-top");

if (scrollBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

}

// ======================================
// PROPERTY LOADED
// ======================================

console.log("Property Loaded Successfully");
console.log(property);