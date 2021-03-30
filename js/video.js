var vid = document.getElementsByClassName('video');
var slider = document.querySelector("#slider")


window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

function playVid() {
    vid.play();
    var vol = document.getElementById('volume');
    document.querySelector("video").volume = vol;
    document.getElementById('slider').innerHTML = vol + "%";
}

function pauseVid() {
    vid.pause();
}

function slow() {
    vid.playbackRate = 0.95;
    console.log(vid.playbackRate);
}

function fast() {
    vid.playbackRate = 1.05;
    console.log(vid.playbackRate);
    
}

function skip() {
    var start = vid.currentTime;
    var end = vid.duration;
    if (end - start > 15) {
        vid.currentTime = vid.currentTime = 15;
        console.log(vid.currentTime);
        vid.play();
    } else {
        vid.currentTime = 0;
        console.log(vid.currentTime);
        vid.play();
    }

}

function mute() {
    if (vid.muted == true) {
        vid.muted = false;
        document.getElementById('mute').innerHTML = 'Unmuted';
    } else {
        vid.muted = true;
        document.getElementById('mute').innerHTML = 'Muted'

    }
}

slider.addEventListener("input", function() {
    document.getElementById('volume') = this.value + 10;
    vid.volume = this.value + 10;
    document.getElementById('volume').innerHTML = vid.volume + "%";
  });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

