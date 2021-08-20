window.onload = () => {

  var urlParams = new URLSearchParams(window.location.search);
  var latitude = urlParams.get('latitude');
  var longitude = urlParams.get('longitude');

  if (latitude == null || longitude == null) {
    window.location.assign("/");
  }

  const scene = document.querySelector('a-scene');

  // add place name
  const placeText = document.createElement('a-link');
  placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
  placeText.setAttribute('title', place.name);
  placeText.setAttribute('scale', '15 15 15');
  
  placeText.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
  });

  scene.appendChild(placeText);
};
