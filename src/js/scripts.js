document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playButton = document.getElementById("playbutton");
    var fadeButton = document.getElementById("clickbutton");
    var sections = document.querySelectorAll(".scrollable-section");

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
