//Function controls the mobile nav.
//Makes a curtain menu slide out from the right when the burger-button is pressed.
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav-links li');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Burger Animation
        burger.classList.toggle('toggle');

    });
}

navSlide();
