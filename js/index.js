//index intro
// Check if the code has already been executed
if (!localStorage.getItem("codeExecuted")) {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(".text", { y: "0%", duration: 1, stagger: 0.35 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.8 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1"); //-=1 start 1 s faster
  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=3");
  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
  tl.fromTo(
    ".jumbotron-fluid ",
    { opacity: 0 },
    { opacity: 1, duration: 2 },
    "-=1"
  );
  tl.fromTo(".footer ", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  // Set a flag in local storage to indicate that the code has been executed
  localStorage.setItem("codeExecuted", true);
} else {
  const slider = document.querySelector(".slider");
  const intro = document.querySelector(".intro");
  const text = document.querySelector(".text");
  const jumbotron = document.querySelector(".jumbotron-fluid");
  const nav = document.querySelector("nav");
  const bigText = document.querySelector(".big-text");
  const footer = document.querySelector(".footer");
  if (slider) slider.style.display = "none";
  if (intro) intro.style.display = "none";
  if (text) text.style.display = "none";
  if (jumbotron) jumbotron.style.display = "block";
  if (nav) nav.style.display = "block";
  if (bigText) bigText.style.display = "block";
  if (footer) footer.style.display = "block";
}

// Smooth scrolling for navigation links
if (document.querySelectorAll('a[href^="#"]').length) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Navbar scroll effect

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Subtle parallax effect for floating elements only
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const floatingElements = document.querySelectorAll(".floating-element");

  floatingElements.forEach((element, index) => {
    const speed = 0.2 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Reveal on scroll for .reveal elements
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
