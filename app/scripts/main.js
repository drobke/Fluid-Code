console.log('\'Allo \'Allo!');


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/bower_components/particles.js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


$(document).ready(function () {

    $("nav ul li a").click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 51
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

    $("span.glyphicon-align-justify").click(function () {
        event.preventDefault();
        $("nav.mobile").show(300);
         $("span.glyphicon-align-justify").hide(300);
    });

    $("span.glyphicon-remove").click(function () {
        event.preventDefault();
        $("nav.mobile").hide(300);
        $("span.glyphicon-align-justify").show(300);
     });
    $("nav.mobile a").click(function () {
        event.preventDefault();
        $("nav.mobile").hide(300);
        $("span.glyphicon-align-justify").show(300);
    });

});