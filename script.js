
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
    "video/video4.mp4", // 14:00
    "video/video4.mp4", // 15:00
    "video/video5.mp4", // 16:00
    "video/video6.mp4", // 17:00
    "video/video6.mp4", // 18:00
    "video/video7.mp4", // 19:00
    "video/video8.mp4", // 20:00
    "video/video8.mp4", // 21:00
    "video/video9.mp4", // 22:00
    "video/video9.mp4" // 23:00
  ];


var i = hourNow;
function myNewSrc() {
    var myVideo = document.getElementById('myVideo');
    myVideo.src = videoSources[i];
    myVideo.load();
}
