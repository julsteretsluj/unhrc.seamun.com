const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const typeFilter = document.getElementById("type-filter");
const searchInput = document.getElementById("resource-search");
const resources = Array.from(document.querySelectorAll(".resource"));

function filterResources() {
  const typeValue = (typeFilter?.value || "all").toLowerCase();
  const query = (searchInput?.value || "").trim().toLowerCase();

  resources.forEach((item) => {
    const itemType = (item.getAttribute("data-type") || "").toLowerCase();
    const keywords = (item.getAttribute("data-keywords") || "").toLowerCase();
    const bodyText = item.textContent.toLowerCase();

    const typeMatch = typeValue === "all" || itemType === typeValue;
    const queryMatch = !query || keywords.includes(query) || bodyText.includes(query);

    item.classList.toggle("hidden", !(typeMatch && queryMatch));
  });
}

if (typeFilter) typeFilter.addEventListener("change", filterResources);
if (searchInput) searchInput.addEventListener("input", filterResources);
