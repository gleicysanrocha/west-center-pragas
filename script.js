// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-links a');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Animate icon swap
    const icon = menuToggle.querySelector('i');
    if(mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Setup Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Simple form submission handler
const leadForm = document.getElementById('leadForm');
if(leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // This is where you would normally send the data to a server or API
        const btn = leadForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        // Simulate an API call
        setTimeout(() => {
            btn.textContent = 'Solicitação Enviada com Sucesso!';
            btn.style.backgroundColor = 'var(--clr-primary)';
            btn.style.color = 'var(--clr-bg-dark)';
            
            leadForm.reset();
            
            // Revert back after 3 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style = ''; // remove inline styles to fallback to css classes
            }, 3000);
        }, 1500);
    });
}
