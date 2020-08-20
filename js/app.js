
const navSlide = () =>{
    const nav = document.querySelector('.nav-items');
    const menuBtn = document.querySelector('.menu-btn');
    const navItems = document.querySelectorAll('.nav-items li');

    menuBtn.addEventListener('click', () => {
        // Nav Toggle
        nav.classList.toggle('nav-active');
        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        menuBtn.classList.toggle('toggle');

    });
};
navSlide();