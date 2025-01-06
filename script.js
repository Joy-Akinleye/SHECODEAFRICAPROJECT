document.addEventListener("DOMContentLoaded", ()=> {
    console.log("SheCode Website is ready!")
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('#navbar')

    hamburgerMenu.addEventListener("click", () => {
        navbar.classList.toggle('active');
        console.log()
    });
});