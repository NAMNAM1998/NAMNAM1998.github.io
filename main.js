var topButton = document.getElementById("topButton");
var video = document.getElementById("srcVideo");
var work1 = document.getElementById("work1");
var work2 = document.getElementById("work2");


function topFunction() {
    document.documentElement.scrollTop = 0;
}

function work1Function() {
    video.src = "video/Molecules of Life.mp4";
    video.load();
    work1.style.backgroundColor = "#4C5CFC";
    work2.style.backgroundColor = "#4C5CFC80";
}

function work2Function() {
    video.src = "video/Patient Care.mp4";
    video.load();
    work1.style.backgroundColor = "#4C5CFC80";
    work2.style.backgroundColor = "#4C5CFC";
}