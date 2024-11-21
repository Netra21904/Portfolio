
let menuIcons = document.querySelectorAll('#menu-icon');
let navbars = document.querySelectorAll('.navbar');

menuIcons.forEach(icon => {
    icon.onclick = () => {
        menuIcons.forEach(icon => icon.classList.toggle('bx-x'));
        navbars.forEach(nav => nav.classList.toggle('active'));
    };
});

window.onscroll = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcons.forEach(icon => icon.classList.remove('bx-x'));
    navbars.forEach(nav => nav.classList.remove('active'));
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


/*
const typed = new Typed ('.multiple-text',{
    strings: ['Android Developer', 'Web Developer', 'Python Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

*/