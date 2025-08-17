// Select the hamburger icon and the navigation menu from the HTML
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add a 'click' event listener to the hamburger icon
hamburger.addEventListener("click", () => {
    // Toggle the 'active' class on the hamburger icon
    hamburger.classList.toggle("active");
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle("active");
});

// Optional: Close the menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// ... (your hamburger menu code is here) ...

/* ---- particles.js config ---- */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00f7ff" /* The neon color of the particles */
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#9f00ff", /* The color of the lines connecting particles */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse" /* Particles move away from the cursor */
      },
      "onclick": {
        "enable": true,
        "mode": "push" /* Add more particles on click */
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
    }
  },
  "retina_detect": true
});
// ... (your particles.js code is here) ...

/* ---- Scroll Animation Logic ---- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.event-card');
hiddenElements.forEach((el) => observer.observe(el));