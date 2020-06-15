var today = new Date();
var hourNow = today.getHours();

var videoSources = [
    "https://www.youtube.com/embed/xylKLiSh8Ck?autoplay=1&controls=0&loop=1&showinfo=0", // 00:00
    "https://www.youtube.com/embed/xylKLiSh8Ck?autoplay=1&controls=0&loop=1&showinfo=0", // 01:00
    "https://www.youtube.com/embed/xylKLiSh8Ck?autoplay=1&controls=0&loop=1&showinfo=0", // 02:00
    "https://www.youtube.com/embed/xylKLiSh8Ck?autoplay=1&controls=0&loop=1&showinfo=0", // 03:00
    "https://www.youtube.com/embed/xylKLiSh8Ck?autoplay=1&controls=0&loop=1&showinfo=0", // 04:00
    "https://www.youtube.com/embed/o-KTeGD8bQk?autoplay=1&controls=0&loop=1&showinfo=0", // 05:00
    "https://www.youtube.com/embed/2G_9uk4tdpo?autoplay=1&controls=0&loop=1&showinfo=0", // 06:00
    "https://www.youtube.com/embed/WecowY0AkNU?autoplay=1&controls=0&loop=1&showinfo=0", // 07:00
    "https://www.youtube.com/embed/w1j-gieHlc8?autoplay=1&controls=0&loop=1&showinfo=0", // 08:00
    "https://www.youtube.com/embed/1vmgGBMYYOo?autoplay=1&controls=0&loop=1&showinfo=0", // 09:00
    "https://www.youtube.com/embed/XlaCcQ_TDZQ?autoplay=1&controls=0&loop=1&showinfo=0", // 10:00
    "https://www.youtube.com/embed/wYH7ev6sNH0?autoplay=1&controls=0&loop=1&showinfo=0", // 11:00
    "https://www.youtube.com/embed/9eApBKJq-D0?autoplay=1&controls=0&loop=1&showinfo=0", // 12:00
    "https://www.youtube.com/embed/BAkWU3al41A?autoplay=1&controls=0&loop=1&showinfo=0", // 13:00
    "https://www.youtube.com/embed/7BQ_65HptQM?autoplay=1&controls=0&loop=1&showinfo=0", // 14:00
    "https://www.youtube.com/embed/iJ1ImABsvFQ?autoplay=1&controls=0&loop=1&showinfo=0", // 15:00
    "https://www.youtube.com/embed/iJ1ImABsvFQ?autoplay=1&controls=0&loop=1&showinfo=0", // 16:00
    "https://www.youtube.com/embed/fGTm3e3_KrA?autoplay=1&controls=0&loop=1&showinfo=0", // 17:00
    "https://www.youtube.com/embed/fGTm3e3_KrA?autoplay=1&controls=0&loop=1&showinfo=0", // 18:00
    "https://www.youtube.com/embed/FmbKZIcMYTg?autoplay=1&controls=0&loop=1&showinfo=0", // 19:00
    "https://www.youtube.com/embed/q8zkKWaQDD0?autoplay=1&controls=0&loop=1&showinfo=0", // 20:00
    "https://www.youtube.com/embed/q8zkKWaQDD0?autoplay=1&controls=0&loop=1&showinfo=0", // 21:00
    "https://www.youtube.com/embed/Rh8x40Vu7JA?autoplay=1&controls=0&loop=1&showinfo=0", // 22:00
    "https://www.youtube.com/embed/Rh8x40Vu7JA?autoplay=1&controls=0&loop=1&showinfo=0" // 23:00
  ];


var i = hourNow;
function myNewSrc() {
    var myVideo = document.getElementById('myVideo');
    myVideo.src = videoSources[i];
    myVideo.load();
}
