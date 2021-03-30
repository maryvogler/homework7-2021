var video = document.getElementsByClassName('video');



window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

function playVid() {
    video.play();
    var vol = document.getElementById('volume');
    document.querySelector("video").volume = vol;
}

function pauseVid() {
    video.pause();
}
function slow() {

}

function fast() {
    
}

function skip() {
    
}


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

