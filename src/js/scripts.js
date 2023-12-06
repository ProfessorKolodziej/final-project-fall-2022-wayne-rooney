document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById("myVideo");
    let playButton = document.getElementById("playbutton");
    let fadeButton = document.getElementById("clickbutton");

    playButton.addEventListener("click", function() {
      if (video.paused) {
        video.play();
        playButton.innerText = "Pause Video";
      } else {
        video.pause();
        playButton.innerText = "Play Video";
      }
    });

    video.addEventListener("ended", function() {
        window.location.href = "#contact";
      });
    
    fadeButton.addEventListener("click", function() {
        fadeButton.classList.add("fade-out");


  });
});
