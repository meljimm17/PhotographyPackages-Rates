// Pricing data for all packages
const cardsData = {
  selfPortrait: [
    {
      id: 1,
      title: "SNAP",
      price: "₱290",
      category: "selfPortrait",
      features: [
        "15-Minute Session",
        "1 Person",
        "Unlimited Shots",
        "15 Enhanced Digital Copies",
        "1 Backdrop Color",
        "Access to Props",
        "1 pc 4R Print",
      ],
    },
    {
      id: 2,
      title: "POSE",
      price: "₱390",
      category: "selfPortrait",
      features: [
        "15-Minute Session",
        "1–2 Persons",
        "Unlimited Shots",
        "15 Enhanced Digital Copies",
        "1 Backdrop Color",
        "Access to Props",
        "2 pcs 4R Prints",
      ],
    },
    {
      id: 3,
      title: "CLICK",
      price: "₱550",
      category: "selfPortrait",
      features: [
        "15-Minute Session",
        "3–4 Persons",
        "Unlimited Shots",
        "20 Enhanced Digital Copies",
        "1 Backdrop Color",
        "Access to Props",
        "2 pcs 4R Prints",
      ],
    },
    {
      id: 4,
      title: "FLASH",
      price: "₱790",
      category: "selfPortrait",
      features: [
        "30-Minute Session",
        "5–6 Persons",
        "Unlimited Shots",
        "30 Enhanced Digital Copies",
        "1 Backdrop Color",
        "Access to Props",
        "4 pcs 4R Prints",
      ],
    },
    {
      id: 5,
      title: "SPOTLIGHT",
      price: "₱990",
      category: "selfPortrait",
      features: [
        "30-Minute Session",
        "7–10 Persons",
        "Unlimited Shots",
        "30 Enhanced Digital Copies",
        "1 Backdrop Color",
        "Access to Props",
        "4 pcs 4R Prints",
      ],
    },
    {
      id: 6,
      title: "FOREVER PROMO",
      price: "₱99",
      category: "selfPortrait",
      features: [
        "5-Minute Photo Session",
        "1 Person Only",
        "5 Enhanced Digital Copies",
        "Can combine with friends",
      ],
    },
  ],
  studioPortrait: [
    {
      id: 7,
      title: "MINI SESSION",
      price: "₱399",
      category: "studioPortrait",
      features: [
        "30-Minute Studio Session",
        "Up to 3 Persons",
        "Professional Photographer",
        "15 Enhanced Digital Photos",
        "1 Plain Backdrop Color",
        "Themed backdrops available",
        "2 pcs 4R Prints",
      ],
    },
    {
      id: 8,
      title: "CLASSIC",
      price: "₱799",
      category: "studioPortrait",
      features: [
        "30-Minute Studio Session",
        "Up to 5 Persons",
        "Professional Photographer",
        "30 Enhanced Digital Photos",
        "1 Plain Backdrop Color",
        "Themed backdrops available",
        "2 pcs 4R Prints",
      ],
    },
    {
      id: 9,
      title: "SIGNATURE",
      price: "₱1,500",
      category: "studioPortrait",
      features: [
        "60-Minute Studio Session",
        "Up to 10 Persons",
        "Professional Photographer",
        "50 Enhanced Digital Photos",
        "1 Plain Backdrop Color",
        "4 pcs 4R Prints",
      ],
    },
    {
      id: 10,
      title: "KIDS-THEMED BACKDROP",
      price: "₱300-₱500",
      category: "studioPortrait",
      features: [
        "Creative themed setup",
        "Perfect for kids",
        "Reservation required",
        "1-2 weeks notice needed",
        "Elevate your session",
      ],
    },
    {
      id: 11,
      title: "FANTASY-THEMED SETUP",
      price: "From ₱1,000",
      category: "studioPortrait",
      features: [
        "Custom creative setup",
        "Bring your mood board",
        "Professional styling",
        "Bring your vision to life",
      ],
    },
  ],
  studioRental: [
    {
      id: 12,
      title: "1 HOUR RENTAL",
      price: "₱1,000",
      category: "studioRental",
      features: [
        "Camera included",
        "Basic Studio Lights",
        "Available Props",
        "Plain Backdrops",
        "Perfect for beginners",
      ],
    },
    {
      id: 13,
      title: "2 HOURS RENTAL",
      price: "₱1,800",
      category: "studioRental",
      features: [
        "Camera included",
        "Basic Studio Lights",
        "Available Props",
        "Plain Backdrops",
        "Extended time",
      ],
    },
    {
      id: 14,
      title: "3 HOURS RENTAL",
      price: "₱2,600",
      category: "studioRental",
      features: [
        "Camera included",
        "Basic Studio Lights",
        "Available Props",
        "Plain Backdrops",
        "Maximum flexibility",
      ],
    },
    {
      id: 15,
      title: "ADDITIONAL HOUR",
      price: "₱500/hr",
      category: "studioRental",
      features: [
        "Add more time",
        "Camera included",
        "Studio Lights",
        "Props & Backdrops",
        "Per hour rate",
      ],
    },
  ],
  addons: [
    {
      id: 16,
      title: "Additional 10 Minutes",
      price: "₱100",
      category: "addons",
      features: ["Extend Self Portrait session", "More shots", "Same category"],
    },
    {
      id: 17,
      title: "Additional Person",
      price: "₱100",
      category: "addons",
      features: [
        "Add more people",
        "Self Portrait category",
        "Per person charge",
      ],
    },
    {
      id: 18,
      title: "Additional Backdrop",
      price: "₱150",
      category: "addons",
      features: [
        "Add backdrop color",
        "Self Portrait sessions",
        "Customize your setup",
      ],
    },
    {
      id: 19,
      title: "Take All (50-100 Photos)",
      price: "₱200",
      category: "addons",
      features: [
        "Enhanced digital copies",
        "50-100 Photos",
        "Google Drive delivery",
        "Same day delivery",
      ],
    },
    {
      id: 20,
      title: "Take All (101-200 Photos)",
      price: "₱300",
      category: "addons",
      features: [
        "Enhanced digital copies",
        "101-200 Photos",
        "Google Drive delivery",
        "Same day delivery",
      ],
    },
    {
      id: 21,
      title: "Take All (201-300 Photos)",
      price: "₱400",
      category: "addons",
      features: [
        "Enhanced digital copies",
        "201-300 Photos",
        "Google Drive delivery",
        "Same day delivery",
      ],
    },
    {
      id: 22,
      title: "Take All (300+ Photos)",
      price: "₱500",
      category: "addons",
      features: [
        "Enhanced digital copies",
        "300+ Photos",
        "Google Drive delivery",
        "Same day delivery",
      ],
    },
  ],
};

// Flatten all cards for easier filtering
let allCards = [];
Object.values(cardsData).forEach((category) => {
  allCards = allCards.concat(category);
});

const lionImageUrl =
  "https://www.shutterstock.com/image-photo/powerful-male-lion-stands-proudly-600nw-2630722023.jpg";

let currentCategory = "all";
let searchQuery = "";

// Create card HTML
function createCardHTML(card) {
  return `
    <div class="card" data-card-id="${card.id}" data-category="${card.category}">
      <img src="${lionImageUrl}" class="card-img-top" alt="${card.title}" />
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <div class="card-price">${card.price}</div>
        <button class="card-btn" onclick="showDetails(${card.id})">View Details</button>
      </div>
    </div>
  `;
}

// Show details modal
function showDetails(cardId) {
  const card = allCards.find((c) => c.id === cardId);
  if (!card) return;

  document.getElementById("modalTitle").textContent = card.title;
  document.getElementById("modalPrice").textContent = card.price;

  const featuresHTML = card.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("modalFeatures").innerHTML = featuresHTML;

  const modal = new bootstrap.Modal(document.getElementById("detailsModal"));
  modal.show();
}

// Filter and display cards
function filterAndDisplay() {
  let filtered = allCards;

  // Filter by category
  if (currentCategory !== "all") {
    filtered = filtered.filter((card) => card.category === currentCategory);
  }

  // Filter by search query
  if (searchQuery.trim() !== "") {
    filtered = filtered.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // Display filtered cards
  const container = document.getElementById("cardsContainer");
  const noResults = document.getElementById("noResults");

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResults.style.display = "block";
    container.classList.remove("filtered-single");
  } else {
    container.innerHTML = filtered.map((card) => createCardHTML(card)).join("");
    noResults.style.display = "none";

    // Center single filtered card on mobile
    if (filtered.length === 1) {
      container.classList.add("filtered-single");
    } else {
      container.classList.remove("filtered-single");
    }
  }
}

// Category button click handler
document.addEventListener("DOMContentLoaded", () => {
  // Desktop category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".category-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategory = e.target.dataset.category;
      filterAndDisplay();
    });
  });

  // Mobile category dropdown
  const categorySelect = document.getElementById("categorySelect");
  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      currentCategory = e.target.value;
      // Update desktop buttons
      document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.classList.remove("active");
        if (btn.dataset.category === currentCategory) {
          btn.classList.add("active");
        }
      });
      filterAndDisplay();
    });
  }

  // Search input
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value;
    filterAndDisplay();
  });

  // Initial display
  filterAndDisplay();

  // ================== SWIPE FUNCTIONALITY FOR MOBILE ================== //
  const cardsContainer = document.getElementById("cardsContainer");
  let touchStartX = 0;
  let touchEndX = 0;

  cardsContainer.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    false,
  );

  cardsContainer.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    false,
  );

  function handleSwipe() {
    const swipeThreshold = 35;
    const diff = touchStartX - touchEndX;
    const cardWidth =
      cardsContainer.querySelector(".card")?.getBoundingClientRect().width ||
      280;
    const moveAmount = cardWidth + 24;

    if (Math.abs(diff) < swipeThreshold) return;

    // Swipe left - scroll right
    if (diff > 0) {
      cardsContainer.scrollBy({
        left: moveAmount,
        behavior: "smooth",
      });
    }
    // Swipe right - scroll left
    else {
      cardsContainer.scrollBy({
        left: -moveAmount,
        behavior: "smooth",
      });
    }
  }
});
