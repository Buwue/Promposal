const button = document.getElementById('yes_div');

button.addEventListener('mousedown', function() {
  document.getElementsByClassName("background")[0].style.display = "none";
  document.getElementsByClassName("background_2")[0].style.display = "flex";
  post("Clicked yes")
  setInterval(() => {
    playAudio()
  }, 100);
});


var audio = new Audio('yippee-tbh.mp3');
function playAudio() {
  audio.play()
}



const no = document.getElementById('no_div');
const mainEmoji = document.getElementById("main_emoji")

no.addEventListener('mouseenter', function() {
  mainEmoji.setAttribute("src","./banana-crying-cat.gif")
  no.style.opacity = 0;
});

no.addEventListener('mouseleave', function() {
  no.style.opacity = 1;
  mainEmoji.setAttribute("src","./output-onlinegiftools.gif")
});

$(function() {
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


function post(message) {
  fetch("https://discord.com/api/webhooks/1206670332447031306/tj4zLyn8B-rBY0iF61IpvQVVmPsO4enR7GiQULJG-ZXGz6mIt031t2RiySityhdx3noH", {
  method: "POST",
  body: JSON.stringify({
      "content": new Date().toLocaleTimeString() + " : " +message,
      "embeds": null,
      "attachments": []
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
}

post("Opened website")
