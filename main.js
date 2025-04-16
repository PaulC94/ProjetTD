
document.addEventListener('DOMContentLoaded', () => {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.backgroundColor = currentScroll > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)';
        }
        lastScroll = currentScroll;
    });


    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

const carCards = document.querySelectorAll('.car-card');
carCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

const form = document.querySelector('.contact-form form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.transform = 'scale(1.02)';
        input.style.transition = 'all 0.3s ease';
    });

    input.addEventListener('blur', () => {
        input.style.transform = 'scale(1)';
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Envoi en cours...';
    button.style.backgroundColor = '#666';
    
    setTimeout(() => {
        button.textContent = 'Message envoyé !';
        button.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            form.reset();
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }, 1500);
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

document.querySelectorAll('.about-text').forEach((text, index) => {
    text.style.opacity = '0';
    text.style.transform = 'translateX(-50px)';
    text.style.transition = 'all 0.5s ease';
    text.style.transitionDelay = `${index * 0.2}s`;
    
    observer.observe(text);
});