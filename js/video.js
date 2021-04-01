var vid = document.getElementById('player1')



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
    if (vid.currentTime < vid.duration) {
        vid.currentTime = vid.currentTime + 15;
        console.log("Skip ahead: " + vid.currentTime);
        vid.play();
    } else {
        vid.currentTime = 0;
        console.log("Skip ahead: " + vid.currentTime);
        vid.play();
    }

 });


document.querySelector("#mute").addEventListener("click", function() {
	if (vid.muted == true) {
        vid.muted = false;
        document.getElementById('mute').innerHTML = 'Mute';
    } else {
        vid.muted = true;
        document.getElementById('mute').innerHTML = 'Unmute'

    }

 });


document.querySelector("input").addEventListener("mousemove", function() {
    vid.volume = vid.volume + 10;
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
