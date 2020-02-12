//I haven't done anything with my miserable life yet. Please help me.//
var size = 1;
var backgrounds = ['https://media.tenor.com/images/f651c7cf357d5bb2a57dae1f549c3b6b/tenor.gif','https://media.tenor.com/images/bb813e0066d3f1b1b93e417b25b35430/tenor.gif','https://media1.tenor.com/images/3ffe81203d6ab2d3120f5db0119392d6/tenor.gif?itemid=13329851','https://media.tenor.com/images/dd492862f2a07898534dcd2bdd2807e9/tenor.gif','https://media.tenor.com/images/dd492862f2a07898534dcd2bdd2807e9/tenor.gif',
'https://media.tenor.com/images/fee9a835fd0fd5088d039bfcda504025/tenor.gif',
'https://fsmedia.imgix.net/92/b1/2e/1b/01b6/4ec7/b24e/8b3ad3fb4e61/fortnitedancegif.gif','https://media.tenor.com/images/9fa72dcefab16e021e9dac7878a3b3f6/tenor.gif','https://media.tenor.com/images/6ab358dfb57c720cf5ccc3c62c404765/tenor.gif',
"https://media.tenor.com/images/e1d0ff9a82eb6d6f66b6b67ba4853d03/tenor.gif",
"https://media1.tenor.com/images/2555a0c2232b7efa4529c298ece48a02/tenor.gif?itemid=13204493",
]
var background = Math.floor(Math.random()*backgrounds.length);


// document.getElementById('bg').style.backgroundimage = `url("${backgrounds[background]}")`;

$('body').css('background-image',`url("${backgrounds[background]}")`)
setInterval(zoom, 50);
function zoom(){
  $('body').css('background-size',`${size}px`);
  size = size + size/100;
  if (size >= window.innerWidth) {
    size=1;
    resetBackgroundImage()
  }
}
function resetBackgroundImage() {
  background = backgrounds[Math.floor(Math.random()*backgrounds.length)]
}

//Timer
  // Set the date we're counting down to
  var countDownDate = new Date("February 14, 2020 24:00").getTime();
  setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("timer").innerHTML = days;
    console.log(days);



    // If the count down is over, write some text 

if (distance <= 0) {
      console.log('Oh boy time to be lonely');
      document.getElementById("timer").innerHTML = "Maximum Big Sad Lonely Time!";
    }
  }, 1000)
    
function openPadreSecret() {
  document.getElementById("padreSecret").innerHTML = "we actually were too lazy to remove them lol"
}
function closePadreSecret() {
  document.getElementById("padreSecret").innerHTML = "i think"
}