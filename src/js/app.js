const navbar = document.querySelector('.navbar');
const navbarRef = navbar.offsetTop;

const sections = document.querySelectorAll('.section-link');
const navbarLinks = document.querySelectorAll('.navbar-link');

const progress = document.querySelector('.p')
const progressBarPercents = [95, 98, 95, 95, 90, 90, 90, 80, 50, 60, 50]

window.onload = () => {
    progressBars();
    window.addEventListener('scroll', () => {

        if (window.pageYOffset >= navbarRef) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky')
        }

        sections.forEach((section, i) => {
            if (window.pageYOffset >= section.offsetTop) {
                navbarLinks.forEach(navbarLink => navbarLink.classList.remove('active'));
                navbarLinks[i].classList.add('active')
            }
        })
    });

    mainFn();

}

function progressBars() {
    document.querySelectorAll('.about-progress-bar-color').forEach((el, i) => {
        el.style.width = `
        ${progressBarPercents[i]}%`;

        el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
    })
}

function mainFn() {
    window.addEventListener('resize', () => {
        window.location.reload();
    })
}

