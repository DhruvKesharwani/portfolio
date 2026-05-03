document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('.nav-links a, .hero-actions a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed nav
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Reveal Sections on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply basic fade-in effect to all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // 3. Simple Navbar Background Change on Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(11, 12, 16, 0.95)';
            nav.style.padding = '0.8rem 4rem';
        } else {
            nav.style.background = 'rgba(11, 12, 16, 0.85)';
            nav.style.padding = '1.25rem 4rem';
        }
    });
});
