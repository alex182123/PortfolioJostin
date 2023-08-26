
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

$(document).ready(function () {
    //SCROLLTOP
    scrollTopWidget();


    //YEARCOPYRIGHT
    getYearCopyright();

    //TOOLTIP
    tooltip();

    //FADENAVBAR
    fadeNavbar();

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
});