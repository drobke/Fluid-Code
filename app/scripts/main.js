console.log('\'Allo \'Allo!');


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/bower_components/particles.js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});