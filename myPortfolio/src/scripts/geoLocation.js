var x = document.getElementById("gpsLocation");
var id;

function getLocation() {
  if (navigator.geolocation) {
    id = navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    x.innerHTML="Lat: " + position.coords.latitude + 
    " Long: " + position.coords.longitude + "<br>";
}

function clearPosition() {
    navigator.geolocation.clearWatch(id);
}