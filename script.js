
var today = new Date();
var hourNow = today.getHours();

var videoSources = [
    "video/video10.mp4", // 00:00
    "video/video10.mp4", // 01:00
    "video/video10.mp4", // 02:00
    "video/video10.mp4", // 03:00
    "video/video10.mp4", // 04:00
    "video/video11.mp4", // 05:00
    "video/video11.mp4", // 06:00
    "video/video12.mp4", // 07:00
    "video/video13.mp4", // 08:00
    "video/video14.mp4", // 09:00
    "video/video15.mp4", // 10:00
    "video/video1.mp4", // 11:00
    "video/video2.mp4", // 12:00
    "video/video3.mp4", // 13:00
    "https://www.youtube.com/embed/7BQ_65HptQM?autoplay=1&loop=1", // 14:00
    "https://www.youtube.com/embed/iJ1ImABsvFQ?autoplay=1&loop=1", // 15:00
    "https://www.youtube.com/embed/iJ1ImABsvFQ?autoplay=1&loop=1", // 16:00
    "https://www.youtube.com/embed/fGTm3e3_KrA?autoplay=1&loop=1", // 17:00
    "https://www.youtube.com/embed/fGTm3e3_KrA?autoplay=1&loop=1", // 18:00
    "https://www.youtube.com/embed/FmbKZIcMYTg?autoplay=1&loop=1", // 19:00
    "https://www.youtube.com/embed/q8zkKWaQDD0?autoplay=1&loop=1", // 20:00
    "https://www.youtube.com/embed/q8zkKWaQDD0?autoplay=1&loop=1", // 21:00
    "https://www.youtube.com/embed/Rh8x40Vu7JA?autoplay=1&loop=1", // 22:00
    "https://www.youtube.com/embed/Rh8x40Vu7JA?autoplay=1&loop=1" // 23:00
  ];


var i = hourNow;
function myNewSrc() {
    var myVideo = document.getElementById('myVideo');
    myVideo.src = videoSources[i];
    myVideo.load();
}
