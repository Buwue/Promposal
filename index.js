// Select the button element by its ID
const button = document.getElementById('yes_div');
// Add event listener to the button
button.addEventListener('mousedown', function() {


  document.getElementsByClassName("background")[0].style.display = "none";
  document.getElementsByClassName("background_2")[0].style.display = "flex";
  setInterval(() => {
    playAudio()
  }, 100);
});


var audio = new Audio('yippee-tbh.mp3');
function playAudio() {
  audio.play()
}


$(function() {
    // Get random number between 2 ranges
    function randomNum(m, n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor(Math.random() * (n - m + 1)) + m;
    }
    
    function heartAnimation() {
      $this = $('.effect-text');
      var heartCount = ($this.width()/100)*3;
      for (var i = 0; i< heartCount; i++) {
        var heartSize = (randomNum(60, 120) / 10);
        $this.append('<span class="tiny-heart" style="top: '+ randomNum(0, 100) +'%; left: '+ randomNum(0, 100) +'%; width: '+ heartSize +'px; height: '+ heartSize +'px ; animation-delay: -'+ randomNum(0, 3) +'s; animation-duration: '+ randomNum(2, 5) +'s"></span>')
      }
    }
    
    heartAnimation();
  })

