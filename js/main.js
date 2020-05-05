console.log('code.js');

$(document).ready(function () {
    console.dir(window);
    window.addEventListener('scroll', () => {
        console.log('wsdsdf');
    });

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);

    });

    $('.scrollUp').on('click', function () {
        $('html, body').animate({scrollTop: 0}, '1500');
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > screen.height) {
            $('.scrollUp').addClass('show');
        } else {
            $('.scrollUp').removeClass('show');
        }
    });
    $("#btn-hide").click(function () {
        $("div#container").slideToggle("slow");
    });

    $(".nav_button").click(function () {
        $('.navigation').slideToggle(300);
    });
});

