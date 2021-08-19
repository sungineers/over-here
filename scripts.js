document.querySelector('a-scene').addEventListener('loaded', function () {
    console.log('hello');
});


setTimeout(function(){ document.getElementById('overlay').remove(); }, 3000);