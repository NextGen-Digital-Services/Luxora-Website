// Mobile Menu

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
});

// Explore Button

document.querySelector(".explore").addEventListener("click", function () {
  document.querySelector("#collection").scrollIntoView({
    behavior: "smooth",
  });
});

// Contact Button

document.querySelector(".contact-btn").addEventListener("click", function () {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});

// WhatsApp Button

document.querySelector(".whatsapp").addEventListener("click", function () {
  window.open("https://wa.me/919311328510");
});

// Smooth Navbar Scroll

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Sticky Navbar

window.addEventListener("scroll", function () {
  document
    .getElementById("header")
    .classList.toggle("sticky", window.scrollY > 0);
});

const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  fadeElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero-img");

  let scroll = window.scrollY;

  hero.style.transform = "translateY(" + scroll * 0.3 + "px)";
});

window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero-img");

  let scroll = window.scrollY;

  if (window.innerWidth < 768) {
    hero.style.transform = "translateY(" + scroll * 0.1 + "px)";
  } else {
    hero.style.transform = "translateY(" + scroll * 0.3 + "px)";
  }
});
