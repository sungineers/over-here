document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', function (e) {
        console.log('hello');
    });
});


setTimeout(function(){ document.getElementById('overlay').remove(); }, 3000);