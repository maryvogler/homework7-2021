var vid = document.getElementById('player1')

var slider = document.querySelector("#slider")


window.addEventListener("load", function() {
	console.log("Good job opening the window");

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
    vid.play();
    document.getElementById('volume').innerHTML = (vid.volume * 100) + '%';
 });


 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    vid.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate = 0.95 * vid.playbackRate;
    console.log(vid.playbackRate);
 });


 document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate = 1.05 * vid.playbackRate;
    console.log(vid.playbackRate);
 });

document.querySelector("#skip").addEventListener("click", function() {
	var start = vid.currentTime;
    var end = vid.duration;
    if ((end - start) > 15) {
        vid.currentTime = vid.currentTime + 15;
        console.log(vid.currentTime);
        vid.play();
    } else {
        vid.currentTime = 0;
        console.log(vid.currentTime);
        vid.play();
    }

 });


document.querySelector("#mute").addEventListener("click", function() {
	if (vid.muted == true) {
        vid.muted = false;
        document.getElementById('mute').innerHTML = 'Unmuted';
    } else {
        vid.muted = true;
        document.getElementById('mute').innerHTML = 'Muted'

    }

 });


slider.addEventListener("input", function() {
    document.getElementById('volume') = this.value + 10;
    vid.volume = this.value + 10;
    document.getElementById('volume').innerHTML = vid.volume + "%";
  });

document.querySelector("#vintage").addEventListener("click", function() {

    console.log('Change CSS');
    vid.classList.add('oldSchool');
 });

document.querySelector("#orig").addEventListener("click", function() {

    console.log('Change CSS');
    vid.classList.remove('oldSchool');
 });
