// --- Countdown Timer Logic ---
const countdown = () => {
    const countDate = new Date("February 20, 2026 09:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap < 0) {
        if (document.getElementById("countdown-timer")) {
            document.getElementById("countdown-timer").innerHTML = "<div class='fest-live' style='font-size: 1.5rem; color: var(--primary-color);'>The Fest is Live!</div>";
        }
        return;
    }

    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    if (document.getElementById("countdown-timer")) {
        document.getElementById('days').innerText = textDay;
        document.getElementById('hours').innerText = textHour;
        document.getElementById('minutes').innerText = textMinute;
        document.getElementById('seconds').innerText = textSecond;
    }
};

if (document.getElementById("countdown-timer")) {
    setInterval(countdown, 1000);
}

// --- Registration Fee Logic ---
const eventSelect = document.getElementById('event');
const feeElement = document.getElementById('fee');

if (eventSelect && feeElement) {
    eventSelect.addEventListener('change', () => {
        const selectedOption = eventSelect.options[eventSelect.selectedIndex];
        const text = selectedOption.text;
        
        const feeMatch = text.match(/₹(\d+)/);
        if (feeMatch) {
            feeElement.innerText = `₹${feeMatch[1]}.00`;
        } else {
            feeElement.innerText = "Free";
        }
    });
}

// --- Hamburger Menu Logic ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link, .nav-action-mobile a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// --- Scroll Animation Logic ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.category-link, .team-member, .sponsor-logo');
hiddenElements.forEach((el) => observer.observe(el));

// --- FAQ Accordion Logic ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.faq-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
        }
        item.classList.toggle('active');
    });
});

// --- Login/Register Tabs ---
const formTabs = document.querySelectorAll('.form-tab-link');
const formTabContents = document.querySelectorAll('.form-tab-content');

if(formTabs.length > 0) {
    formTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(`#${tab.dataset.tab}`);
            
            formTabs.forEach(item => item.classList.remove('active'));
            formTabContents.forEach(item => item.classList.remove('active'));
            
            tab.classList.add('active');
            target.classList.add('active');
        });
    });
}

// --- Front-end Password Confirmation Demo ---
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        const password = document.getElementById('reg-password');
        const confirmPassword = document.getElementById('reg-confirm-password');
        const messageEl = this.querySelector('.form-message');

        if (password.value !== confirmPassword.value) {
            e.preventDefault(); // Stop form submission
            messageEl.textContent = 'Passwords do not match. Please try again.';
            messageEl.style.display = 'block';
        } else {
            messageEl.style.display = 'none';
            // In a real application, the form would submit to the backend here.
        }
    });
}


// --- particles.js config ---
if (document.getElementById("particles-js")) {
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
          "value": "#00f7ff"
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
          "color": "#9f00ff",
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
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
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
}