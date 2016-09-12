console.log('\'Allo \'Allo!');


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles-js', {
  'particles': {
    'number': {
      'value': 15,
      'density': {
        'enable': false,
        'value_area': 6707.754953874318
      }
    },
    'color': {
      'value': '#1be8c4'
    },
    'shape': {
      'type': 'circle',
      'stroke': {
        'width': 0,
        'color': '#000000'
      },
      'polygon': {
        'nb_sides': 8
      },
      'image': {
        'src': 'img/github.svg',
        'width': 100,
        'height': 100
      }
    },
    'opacity': {
      'value': 0.6493818846505367,
      'random': false,
      'anim': {
        'enable': false,
        'speed': 1,
        'opacity_min': 0.1,
        'sync': false
      }
    },
    'size': {
      'value': 4.008530152163807,
      'random': true,
      'anim': {
        'enable': false,
        'speed': 40,
        'size_min': 0.1,
        'sync': false
      }
    },
    'line_linked': {
      'enable': true,
      'distance': 16.03412060865523,
      'color': '#ffffff',
      'opacity': 0.04008530152163807,
      'width': 0
    },
    'move': {
      'enable': true,
      'speed': 1.603412060865523,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false,
      'attract': {
        'enable': false,
        'rotateX': 600,
        'rotateY': 1200
      }
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false,
        'mode': 'bubble'
      },
      'onclick': {
        'enable': true,
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'grab': {
        'distance': 400,
        'line_linked': {
          'opacity': 1
        }
      },
      'bubble': {
        'distance': 400,
        'size': 40,
        'duration': 2,
        'opacity': 8,
        'speed': 3
      },
      'repulse': {
        'distance': 200,
        'duration': 0.4
      },
      'push': {
        'particles_nb': 4
      },
      'remove': {
        'particles_nb': 2
      }
    }
  },
  'retina_detect': true
});

$(document).ready(function () {

    $('nav ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 51
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });

    $('#moveDown').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1200)
        ;
        event.preventDefault();
        return false;
    });

    $('#moveUp').click(function () {
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
            $('nav').addClass('header-fixed', 600);
        }
        else {
            $('nav').removeClass('header-fixed', 600);
        }
    });

    $(window).on('scroll', function () {
        var logo = $('.logo');
        var range = 300;
        var scrollTop = $(this).scrollTop();
        var offset = logo.offset().top;
        var height = logo.outerHeight();
        offset = offset + height / 2;
        var calc = 1 - (scrollTop - offset + range) / range;

        logo.css({ 'opacity': calc });

        if ( calc > '1' ) {
            logo.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            logo.css({ 'opacity': 0 });
        }

    });

    $('span.glyphicon-align-justify').click(function () {
        event.preventDefault();
        $('nav.mobile').show(300);
         $('span.glyphicon-align-justify').hide(300);
    });

    $('span.glyphicon-remove').click(function () {
        event.preventDefault();
        $('nav.mobile').hide(300);
        $('span.glyphicon-align-justify').show(300);
     });

    $('nav.mobile a').click(function () {
        event.preventDefault();
        $('nav.mobile').hide(300);
        $('span.glyphicon-align-justify').show(300);
    });


});