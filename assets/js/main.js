
// Recordar revisar este codigo para poder utilizar el envio de correos a una api

// Email.send({
//     Host: "smtp.yourisp.com",
//     Username: "username",
//     Password: "password",
//     To: 'them@website.com',
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
// }).then(
//     message => alert(message)
// );


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

    $('#scrollDownWidget').click(function () {
        $('html, body').animate({ scrollTop: $(window).height() }, 600);
    });
}

function checkSection(idElement) {
    const element = $('#About');
    // const element = $(idElement);
    const windowHeight = $(window).height();

    $(window).scroll(function () {
        const elementTop = element.offset().top;

        if (elementTop - windowHeight < 0) {
            // El usuario ha pasado por la sección
            alert('Usuario ha pasado por la sección ' + idElement);
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
            if (elementTop - windowHeight < 0) {
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

// Ejemplo de uso

// Ejemplo de uso


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
    // fadeNavbar();

    //TYPEWRITTEREFFECT
    typeWritterEfect('home-title');

    //TYPEWRITTEREFFECT
    typeWritterEfect('about-title');

    //TYPEWRITTEREFFECT
    typeWritterEfect('projects-title');

    //TYPEWRITTEREFFECT
    typeWritterEfect('contact-title');

    // Manejar clics en enlaces con desplazamiento suave
    $('a[href^="#"]').on('click', function (event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800); // Ajusta la velocidad del desplazamiento si es necesario
        }
    });
    checkScrolling(['Home', 'Projects', 'About', 'Contact']);
});