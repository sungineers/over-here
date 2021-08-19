function generateUrl() {
    document.getElementById('generateBtn').innerHTML = "Regenerate";


    navigator.geolocation.getCurrentPosition((position) => {

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        console.log(window.location.protocol+window.location.hostname+window.location.pathname+"/find.html");
        
      });

}


