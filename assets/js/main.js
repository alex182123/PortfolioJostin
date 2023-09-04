function scrollTopWidget() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').addClass('active');
        } else {
            $('#scrollToTop').removeClass('active');
        }
    });

    $('#scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
}

function getYearCopyright() {
    const currentYear = new Date().getFullYear();
    const link = '<a target="_blank" href="https://github.com/alex182123?tab=repositories">Alex182123</a>';
    $('#copyright').html(`© Copyright ${currentYear} ${link}`);
}

function tooltip() {
    $('[data-toggle="tooltip"]').tooltip();
}

function fadeNavbar() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#myNavbar').css('opacity', '1'); // Muestra la barra de navegación
        } else {
            $('#myNavbar').css('opacity', '0'); // Oculta la barra de navegación
        }
    });
}

function typeWritterEfect(id) {
    const titleElement = document.getElementById(id);
    const titleText = titleElement.innerText;
    titleElement.innerText = ''; // Limpia el contenido original

    let i = 0;
    const typingEffect = setInterval(() => {
        titleElement.innerText = titleText.slice(0, i);
        i++;
        if (i > titleText.length) {
            clearInterval(typingEffect);
        }
    }, 100); // Ajusta el valor para cambiar la velocidad del efecto
}

function scrollDownSeeMore() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollDownWidget').css('opacity', '0');
        } else {
            $('#scrollDownWidget').css('opacity', '1');
        }
    });
}
function checkScrolling(idArray) {
    const elements = idArray.map(id => document.getElementById(id));
    const windowHeight = window.innerHeight;
    const links = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', function () {
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Adjust this value to change when the section is considered seen
            const offset = 100; // For example, consider the section seen when it's 100px from the viewport

            if (elementTop - windowHeight + offset <= 0 && elementBottom >= offset) {
                links.forEach(link => {
                    if (link.getAttribute('href') === '#' + idArray[index]) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });
}



$(document).ready(function () {
    //SCROLLDOWN
    scrollDownSeeMore();

    //SCROLLTOP
    scrollTopWidget();


    //YEARCOPYRIGHT
    getYearCopyright();

    //TOOLTIP
    tooltip();

    //FADENAVBAR
    fadeNavbar();

    //TYPEWRITTEREFFECT
    typeWritterEfect('home-title');

    // Manejar clics en enlaces con desplazamiento suave
    $('a[href^="#"]').on('click', function (event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800); // Ajusta la velocidad del desplazamiento si es necesario
        }
    });
    checkScrolling(['Home', 'About', 'Projects', 'Contact']);


});