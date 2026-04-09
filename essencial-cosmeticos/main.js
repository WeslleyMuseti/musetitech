// Smooth scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".hero-content, .section-title, .contact-card, .scent-card",
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

  // Scent Card Interaction
  const scentCards = document.querySelectorAll(".scent-card");
  scentCards.forEach((card) => {
    card.addEventListener("click", () => {
      const scent = card.querySelector("h3").innerText;
      const message = `Olá! Gostaria de saber mais sobre as fragrâncias do perfil ${scent}.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/5513996194443?text=${encodedMessage}`,
        "_blank",
      );
    });
  });

  // Carousel Pause on Hover
  const track = document.querySelector(".carousel-track");
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });

  // Log for interaction check
  console.log("Essencial Cosméticos - Luxury Experience Loaded");
});

// Navigation background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 0, 0.95)";
    header.style.padding = "5px 0";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.8)";
    header.style.padding = "0";
  }
});
