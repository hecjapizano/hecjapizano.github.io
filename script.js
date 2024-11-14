 // Smooth scroll para los enlaces de navegación
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación del header al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        return;
    }

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    lastScroll = currentScroll;
});