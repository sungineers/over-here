window.onload = () => {

  var urlParams = new URLSearchParams(window.location.search);
  var latitude = urlParams.get('latitude');
  var longitude = urlParams.get('longitude');

  if (latitude == null || longitude == null) {
    window.location.assign("/over-here");
  }

  console.log(latitude);
  console.log(longitude);

  const scene = document.querySelector('a-scene');

  var place = "latitude: " + latitude + "; longitude: " + longitude + ";";
  console.log(place);

  // add place name
  var placeText = document.createElement('a-text');
  placeText.setAttribute('gps-entity-place', place);
  placeText.setAttribute('look-at', "[gps-camera]");
  placeText.setAttribute('value', "Here!");
  placeText.setAttribute('scale', '50 50 50');
  
  placeText.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
  });

  console.log(placeText);

  scene.appendChild(placeText);
};
