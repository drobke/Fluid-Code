console.log('\'Allo \'Allo!');


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/bower_components/particles.js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


$(document).ready(function () {

    $("nav ul li a").click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 60
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });

    $("#moveDown").click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var welcome = $('#welcome').height();
        if (scroll >= welcome) {
            $("nav").addClass("header-fixed", 600);
        }
        else {
            $("nav").removeClass("header-fixed", 600);
        }

    });

});