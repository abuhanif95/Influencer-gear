const hamburgerMenu = document.getElementById("hamburgerMenu");
const mobileNav = document.getElementById("mobileNav");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

hamburgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.innerHTML = body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light",
  );
});

document.querySelectorAll(".nav-link, .mobile-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    if (link.classList.contains("nav-link")) {
      link.classList.add("active");
    }
    mobileNav.style.display = "none";

    const targetId = link.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".product-card");
    const title = card.querySelector(".product-title").textContent;
    alert(`✨ ${title} added to cart!`);
  });
});

document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector(".product-title").textContent;
    alert(`Viewing details for: ${title}`);
  });
});

document.getElementById("cartIcon").addEventListener("click", () => {
  alert("🛒 Your cart has 5 items");
});

document.getElementById("searchIcon").addEventListener("click", () => {
  alert("🔍 Search feature coming soon!");
});

document.querySelector(".see-more-link").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Loading more amazing products...");
});

document.querySelector(".feature-btn").addEventListener("click", () => {
  alert("🎉 Welcome! Check out our featured collection.");
});

document.querySelector(".hero-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const scroll = window.scrollY;

    if (scroll >= top && scroll < bottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
