var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con texto, tiempo de inicio y duración
var lyricsData = [
  { text: "Baby", time: 15.5, duration: 2 },
  { text: "you were the love of my life", time:18 , duration: 4 },
  { text: "Maybe", time: 23, duration: 2 },
  { text: "you don't know what's lost 'til you find it", time: 26, duration: 5 },
  { text: "Take a walk on Sunday through the afternoon", time: 33, duration: 3 },
  { text: "We can always find somethin' for us to do", time: 37, duration: 4 },
  { text: "We don't really like what's on the news, but it's on all the time", time: 41, duration: 7 },
  { text: "I take you with me every time I go away", time: 49, duration: 3 },
  { text: "In a hotel, usin' someone else's name", time: 53, duration: 4 },
  { text: "baby", time: 65, duration: 2 },
  { text: "you were the love of my life", time: 67.2, duration: 3 },
  { text: "maybe", time: 72, duration: 2 },
  { text: "you don't know what's lost 'til you find it", time: 75, duration: 5 },
  { text: "It's not what I wanted, to leave you behind", time: 81, duration: 3 },
  { text: "Don't know where you'll land when you fly", time: 85, duration: 3 },
  { text: "But, baby, you were the love of my life", time: 89, duration: 9 },
  { text: "It's unfortunate, ooh", time: 99, duration: 3 },
  { text: "Just coordinates, ooh", time: 107, duration: 4 },
  { text: "I don't know you half as well as all my friends", time: 114, duration: 3 },
  { text: "I won't pretend that I've been doin' everything I can", time: 118, duration: 4 },
  { text: "To get to know your creases and your ends", time: 123, duration: 2 },
  { text: "Are they the same?", time: 126, duration: 3 },
  { text: "Baby, you were the love of my life", time: 130, duration: 6 },
  { text: "Maybe you don't know what's lost 'til you find it", time: 138, duration: 7 },
  { text: "It's not what I wanted, to leave you behind", time: 146, duration: 3},
  { text: "Don't know where you'll land when you fly", time: 150, duration: 3},
  { text: "But, baby, you were the love of my life", time: 154, duration: 9 },
];

function updateLyrics() {
  var currentTime = audio.currentTime;

  var currentLine = lyricsData.find(line => 
    currentTime >= line.time && currentTime < line.time + line.duration
  );

  if (currentLine) {
    var elapsed = currentTime - currentLine.time;

    // Duración del fade más larga y suave
    var fadeDuration = 0.8;

    let opacity = 1;

    if (elapsed < fadeDuration) {
      // Fade in progresivo
      opacity = elapsed / fadeDuration;
    } else if (elapsed > currentLine.duration - fadeDuration) {
      // Fade out progresivo
      opacity = (currentLine.duration - elapsed) / fadeDuration;
    }

    // Limitar opacidad entre 0 y 1
    opacity = Math.max(0, Math.min(1, opacity));

    lyrics.style.opacity = opacity;
    lyrics.textContent = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.textContent = "";
  }
}

// Más fluido con requestAnimationFrame
function loop() {
  updateLyrics();
  requestAnimationFrame(loop);
}

// Iniciar el loop
loop();
