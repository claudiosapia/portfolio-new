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

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

// MODAL

// --- MODAL PROJECT DATA STRUCTURE ---
// Each project has an array of images, each with its own title and description
const projectData = {
  project1: [
    {
      src: "./pics/ciso/ciso_full.webp",
      title: "Intelligent CISO - Home Page",
      description:
        "Custom homepage design, theme development, and SEO optimization.\n© Copyright 2025 Intelligent CISO (Lynchpin Media). Project completed as part of my employment at Lynchpin Media. Used here for portfolio demonstration only.",
    },
    {
      src: "./pics/ciso/ciso_top.webp",
      title: "Intelligent CISO - Top Section",
      description: "Hero section and navigation bar.\n© Lynchpin Media.",
    },
    {
      src: "./pics/ciso/ciso_mid.webp",
      title: "Intelligent CISO - Middle Section",
      description: "Main content and featured articles.\n© Lynchpin Media.",
    },
    {
      src: "./pics/ciso/ciso-bottom.webp",
      title: "Intelligent CISO - Bottom Section",
      description: "Main content and carousel items.\n© Lynchpin Media.",
    },
    {
      src: "./pics/ciso/ciso-foot.webp",
      title: "Intelligent CISO - Bottom Section",
      description: "Bottom section of page.\n© Lynchpin Media.",
    },
  ],
  project5: [
    {
      src: "./pics/ondablu/home-desktop.webp",
      title: "B&B Onda Blu - Home Page",
      description:
        "Homepage with booking form and featured rooms.\n© B&B Onda Blu. Project completed as a student for my final HND year project.",
    },
    {
      src: "./pics/ondablu/rooms-desktop.webp",
      title: "B&B Onda Blu - Rooms",
      description: "Room listings and details.\n© B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/booking-desktop.webp",
      title: "B&B Onda Blu - Booking Page",
      description: "Booking form and calendar.\n© B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/dashboard-desktop.webp",
      title: "B&B Onda Blu - Admin Dashboard",
      description:
        "Admin dashboard for managing bookings and content.\n© B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/manage-bookings-desktop.webp",
      title: "B&B Onda Blu - Manage Bookings",
      description: "Bookings management interface.\n© B&B Onda Blu.",
    },

    {
      src: "./pics/ondablu/attractions-desktop.webp",
      title: "B&B Onda Blu - Attractions",
      description: "Nearby attractions and activities.\n© B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/amenities-desktop.webp",
      title: "B&B Onda Blu - Amenities",
      description: "Amenities and services offered.\n© B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/activities-desktop.webp",
      title: "B&B Onda Blu - Activities",
      description: "Local activities and experiences.\n© B&B Onda Blu.",
    },

    {
      src: "./pics/ondablu/about-desktop.webp",
      title: "B&B Onda Blu - About Page",
      description: "About the B&B and contact info.\n© B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/sign-up-desktop.webp",
      title: "B&B Onda Blu - Sign Up",
      description: "User registration page.\n© B&B Onda Blu.",
    },
  ],
  project2: [
    {
      src: "./pics/transition/transition_full.webp",
      title: "Transition Edinburgh - Full Page",
      description:
        "Full website layout and homepage.\n© Transition Edinburgh. Project completed as a volunteer web developer. Used here for portfolio demonstration only.",
    },
    {
      src: "./pics/transition/transition_top.webp",
      title: "Transition Edinburgh - Top Section",
      description: "Hero section and navigation bar.\n© Transition Edinburgh.",
    },
    {
      src: "./pics/transition/transition_section.webp",
      title: "Transition Edinburgh - Content Section",
      description: "Main content and featured events.\n© Transition Edinburgh.",
    },
  ],
  project3: [
    {
      src: "./pics/ellnot-2023.webp",
      title: "E-commerce Website - Main Page",
      description:
        "Node.js, Express, Bootstrap, EJS, and custom shopping cart.",
    },
    {
      src: "./pics/ellnot.webp",
      title: "E-commerce Website - Product Page",
      description: "Dynamic product listings and secure checkout integration.",
    },
  ],
  project14: [
    {
      src: "./pics/limelight/limelight_home.webp",
      title: "Limelight Cinema - Home Page",
      description:
        "Cinema website with ticketing, showtime scheduling, and content management functionalities. Built with PHP, HTML, CSS, JavaScript, MySQL, and SASS/BEM methodology. Responsive and fully featured for demonstration purposes.",
    },
    {
      src: "./pics/limelight/limelight-login.webp",
      title: "Limelight Cinema - Login Page",
      description:
        "Login page for user authentication. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-junior.webp",
      title: "Limelight Cinema - Junior Page",
      description:
        "Junior section for family-friendly movies and events. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-showtimes.webp",
      title: "Limelight Cinema - Showtimes Page",
      description:
        "Showtimes and booking form with seat selection and validation. Technologies: PHP, HTML, CSS, JavaScript, MySQL.",
    },
    {
      src: "./pics/limelight/limelight-booking.webp",
      title: "Limelight Cinema - Booking Confirmation",
      description:
        "Booking confirmation page. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-ticket.webp",
      title: "Limelight Cinema - Ticket Page",
      description:
        "Ticket download and print page. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-signup.webp",
      title: "Limelight Cinema - Sign Up Page",
      description:
        "Sign-up page for new users. Technologies: PHP, HTML, CSS, JavaScript.",
    },
  ],
  project8: [
    {
      src: "./pics/bkb/bkb-home.webp",
      title: "Bike King Borders - Home Page",
      description:
        "Landing page with hero image, navigation, and featured bikes. Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. Responsive and mobile-friendly.",
    },
    {
      src: "./pics/bkb/bkb-services.webp",
      title: "Bike King Borders - Services",
      description:
        "Services overview with Bootstrap cards and icons. Lists repairs, custom builds, and maintenance packages. Technologies: HTML5, Bootstrap, CSS3.",
    },
    {
      src: "./pics/bkb/bkb-shop.webp",
      title: "Bike King Borders - Shop & Gallery",
      description:
        "Product gallery and shop section using Bootstrap grid and modals. Displays bikes, accessories, and event photos. Technologies: HTML5, Bootstrap, JavaScript.",
    },
    {
      src: "./pics/bkb/bkb-contact.webp",
      title: "Bike King Borders - Contact Page",
      description:
        "Contact form with validation, address, and social media links. Responsive layout using Bootstrap. Technologies: HTML5, Bootstrap, CSS3, JavaScript.",
    },
  ],
  project15: [
    {
      src: "./pics/job-market/job-market-full.webp",
      title: "Job Market Candidates – Full Portal View",
      description:
        "Landing page and candidate directory. Built with PHP, Bootstrap 5, MySQL, and custom JavaScript. Features search, filter, and responsive layout for School of Economics job market candidates.",
    },
    {
      src: "./pics/job-market/job-market-content.webp",
      title: "Job Market Candidates – Candidate Profile",
      description:
        "Individual candidate profile page. Displays research, CV, and contact info. Technologies: PHP, Bootstrap, MySQL, JavaScript, HTML5, CSS3.",
    },
  ],
  projectAikido: [
    {
      src: "./pics/aikido/home.webp",
      title: "Iwama Aikido Edinburgh - Home Page",
      description: "Landing page for the dojo website. Built with Flask, Python, Jinja2, and SQLite.",
    },
    {
      src: "./pics/aikido/about.webp",
      title: "Iwama Aikido Edinburgh - About",
      description: "About the dojo, instructors, and aikido philosophy.",
    },
    {
      src: "./pics/aikido/Classes.webp",
      title: "Iwama Aikido Edinburgh - Classes",
      description: "Class schedule and information for members and visitors.",
    },
    {
      src: "./pics/aikido/bookings.webp",
      title: "Iwama Aikido Edinburgh - Bookings",
      description: "Online class booking and registration system.",
    },
    {
      src: "./pics/aikido/contact.webp",
      title: "Iwama Aikido Edinburgh - Contact",
      description: "Contact form and location details.",
    },
    {
      src: "./pics/aikido/admin.webp",
      title: "Iwama Aikido Edinburgh - Admin",
      description: "Admin dashboard for managing members and classes.",
    },

  ],
  // ...add more projects as needed...
};

// --- MODAL LOGIC ---

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all the modal buttons
  var modalButtons = document.getElementsByClassName("modalButton");
  var modal = document.getElementById("modal");
  var projectCarousel = document.getElementById("projectCarousel");

  // Check if required elements exist
  if (!modal || !projectCarousel) {
    console.error("Modal or carousel elements not found");
    return;
  }

  // Attach event listeners to each modal button
  for (var i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener("click", function (e) {
      e.preventDefault();

      var projectId = this.getAttribute("data-project-id");
      var images = projectData[projectId] || [];
      var carouselInner = document.getElementById("carouselInner");

      if (!carouselInner) {
        console.error("Carousel inner element not found");
        return;
      }

      // Clear existing carousel content
      carouselInner.innerHTML = "";

      // Add images to carousel
      images.forEach(function (img, idx) {
        var item = document.createElement("div");
        item.className = "carousel-item" + (idx === 0 ? " active" : "");
        var image = document.createElement("img");
        image.src = img.src;
        image.className = "d-block w-100";
        image.alt = img.title;
        item.appendChild(image);
        carouselInner.appendChild(item);
      });

      // Set initial title/desc
      var titleElement = document.getElementById("projectTitle");
      var descElement = document.getElementById("projectDescription");

      if (images[0] && titleElement && descElement) {
        titleElement.textContent = images[0].title;
        descElement.textContent = images[0].description;
      }

      // Mark which button opened the modal
      for (var j = 0; j < modalButtons.length; j++) {
        modalButtons[j].classList.remove("active-modal-btn");
      }
      this.classList.add("active-modal-btn");

      // Show modal
      modal.style.display = "block";

      // Reset carousel to first slide - use setTimeout to ensure DOM is updated
      setTimeout(function () {
        try {
          if (typeof bootstrap !== "undefined" && bootstrap.Carousel) {
            var carousel =
              bootstrap.Carousel.getOrCreateInstance(projectCarousel);
            carousel.to(0);
          }
        } catch (error) {
          console.log("Bootstrap carousel not available:", error);
        }
      }, 100);
    });
  }

  // Close modal functionality
  var closeButton = document.getElementsByClassName("close")[0];
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Close modal when clicking outside
  modal.addEventListener("click", function (event) {
    if (event.target === this) {
      modal.style.display = "none";
    }
  });

  // Update title/desc on carousel slide
  projectCarousel.addEventListener("slide.bs.carousel", function (event) {
    // Find which project is open
    var activeProjectId = null;
    for (var i = 0; i < modalButtons.length; i++) {
      if (modalButtons[i].classList.contains("active-modal-btn")) {
        activeProjectId = modalButtons[i].getAttribute("data-project-id");
        break;
      }
    }

    if (!activeProjectId) return;

    var images = projectData[activeProjectId] || [];
    var idx = event.to;
    var titleElement = document.getElementById("projectTitle");
    var descElement = document.getElementById("projectDescription");

    if (images[idx] && titleElement && descElement) {
      titleElement.textContent = images[idx].title;
      descElement.textContent = images[idx].description;
    }
  });
});
