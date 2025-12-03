// Navigazione mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
}

// Chiudi il menu mobile quando si clicca su un link
const closeMobileMenu = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && burger) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                // Rimuovi le animazioni dai link
                document.querySelectorAll('.nav-links li').forEach(li => {
                    li.style.animation = '';
                });
            }
        });
    });
}

// Highlight menu attivo
const setActiveMenu = () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (linkPage === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll per anchor links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inizializzazione
const app = () => {
    navSlide();
    closeMobileMenu();
    smoothScroll();
    setActiveMenu();
}

// Inizializza quando il DOM è caricato
document.addEventListener('DOMContentLoaded', app);