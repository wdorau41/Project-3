var vid = document.getElementById("music");
function play(vid){
  vid.autoplay = true;
  vid.load();
}
vid.addEventListener(window, 'load', play);

var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8787, lng: 87.7403},
    zoom: 8
    });
  }
