const cards = [...document.querySelectorAll("#cardsContainer .card")];
const cardsContainer = document.getElementById("cardsContainer");
const noResults = document.getElementById("noResults");
let currentCategory = "all";
let searchQuery = "";

function showDetails(card) {
  document.getElementById("modalTitle").textContent =
    card.querySelector(".card-title").textContent;
  document.getElementById("modalPrice").textContent =
    card.querySelector(".card-price").textContent;
  document.getElementById("modalFeatures").innerHTML =
    card.querySelector(".card-features").innerHTML;
  document.getElementById("modalAdditionalInfo").innerHTML =
    card.querySelector(".card-extra")?.innerHTML || "";

  new bootstrap.Modal(document.getElementById("detailsModal")).show();
}

function showBookingImportantMessage() {
  const messages = [...document.querySelectorAll("[data-booking-category]")];
  const orderedMessages = [
    ...messages.filter(
      (message) =>
        message.dataset.bookingCategory ===
        (currentCategory === "all" ? "selfPortrait" : currentCategory),
    ),
    ...messages.filter(
      (message) =>
        message.dataset.bookingCategory !==
        (currentCategory === "all" ? "selfPortrait" : currentCategory),
    ),
  ];

  document.getElementById("bookingImportantText").innerHTML = `
    ${orderedMessages
      .map(
        (message) => `
          <div class="important-box">
            <div class="important-category">${message.dataset.bookingLabel}</div>
            ${message.innerHTML}
          </div>
        `,
      )
      .join("")}
  `;

  new bootstrap.Modal(document.getElementById("bookingImportantModal")).show();
}

function getPriceValue(card) {
  const priceText = card.querySelector(".card-price").textContent;
  const firstPrice = priceText.replace(/,/g, "").match(/\d+(?:\.\d+)?/);
  return firstPrice ? Number(firstPrice[0]) : Number.POSITIVE_INFINITY;
}

function filterAndDisplay() {
  const query = searchQuery.trim().toLowerCase();
  const visibleCards = cards
    .filter((card) => {
      const matchesCategory =
        currentCategory === "all" || card.dataset.category === currentCategory;
      const matchesSearch = card
        .querySelector(".card-title")
        .textContent.toLowerCase()
        .includes(query);
      return matchesCategory && matchesSearch;
    })
    .sort((firstCard, secondCard) => {
      if (currentCategory === "all") {
        const firstIsTopChoice = firstCard.dataset.cardId === "1";
        const secondIsTopChoice = secondCard.dataset.cardId === "1";
        if (firstIsTopChoice !== secondIsTopChoice) {
          return firstIsTopChoice ? -1 : 1;
        }
      }
      return getPriceValue(firstCard) - getPriceValue(secondCard);
    });

  visibleCards.forEach((card) => cardsContainer.appendChild(card));

  cards.forEach((card) => {
    card.style.display = visibleCards.includes(card) ? "flex" : "none";
  });
  noResults.style.display = visibleCards.length === 0 ? "block" : "none";
  cardsContainer.classList.toggle("filtered-single", visibleCards.length === 1);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".category-btn")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      currentCategory = button.dataset.category;
      filterAndDisplay();
    });
  });

  document
    .getElementById("categorySelect")
    ?.addEventListener("change", (event) => {
      currentCategory = event.target.value;
      document.querySelectorAll(".category-btn").forEach((button) => {
        button.classList.toggle(
          "active",
          button.dataset.category === currentCategory,
        );
      });
      filterAndDisplay();
    });

  document.getElementById("searchInput").addEventListener("input", (event) => {
    searchQuery = event.target.value;
    filterAndDisplay();
  });

  cardsContainer.addEventListener("click", (event) => {
    const button = event.target.closest(".card-btn");
    if (button) showDetails(button.closest(".card"));
  });

  document.getElementById("bookingBtn")?.addEventListener("click", (event) => {
    event.preventDefault();
    showBookingImportantMessage();
  });

  let touchStartX = 0;
  cardsContainer.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });
  cardsContainer.addEventListener("touchend", (event) => {
    const difference = touchStartX - event.changedTouches[0].screenX;
    if (Math.abs(difference) < 35) return;
    const cardWidth =
      cardsContainer.querySelector(".card")?.getBoundingClientRect().width ||
      280;
    cardsContainer.scrollBy({
      left: difference > 0 ? cardWidth + 24 : -(cardWidth + 24),
      behavior: "smooth",
    });
  });

  filterAndDisplay();
});
