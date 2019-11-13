var vid = document.getElementById("music");
function play(vid){
  vid.autoplay = true;
  vid.load();
}
vid.addEventListener('load', play);
