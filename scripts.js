function generateUrl() {
    document.getElementById('generateBtn').innerHTML = "Regenerate";


    navigator.geolocation.getCurrentPosition((position) => {

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let findUrl = window.location.href+"find.html?latitude="+latitude+"&longitude="+longitude;

        document.getElementById('link').innerHTML = "Share Me";

        document.getElementById('link').href = findUrl;
        
      });

}


