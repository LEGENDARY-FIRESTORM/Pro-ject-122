x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
speak_data = "";
apple = "";
draw_apple = "";
to_number = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 

function preload(){
  apple = loadImage('https://th.bing.com/th/id/R.8a368088942d17e6db38ac488bef0f06?rik=jb%2fCjwca1ZZz8w&riu=http%3a%2f%2fclipartmag.com%2fimages%2fteachers-apple-clipart-3.png&ehk=MS4rWwftTFhbYR4QYitukD5neZc0RLtv9hzBbstWaEI%3d&risl=&pid=ImgRaw&r=0');
}
 
recognition.onresult = function(event) {
  to_number = Number(content);
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognised: " + content; 
    
    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing apple";
      draw_apple = "set";
    }
    else{
      document.getElementById("status").innerHTML = "The speech has not recognised the number";
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = document.getElementById("status").value;
    draw_apple = "";
    speak()
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
