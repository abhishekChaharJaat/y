let progres = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("song-img");

song.onloadedmetadata = function () {
  progres.max = song.duration;
  progres.value = song.currentTime;
  song.pause();
};

let source = document.getElementById("source");
let arr = [
  "/audios/INAAM.mp3",
  "/audios/GOAT(256k).mp3",
  "/audios/jatt da muqabla.mp3",
  "/audios/So_High.mp3",
  "/audios/Just_Listen(256k).mp3",
  "/audios/Levels.mp3",
  "/audios/Pakistan.mp3",
  "/audios/So_High.mp3",
];

// source.setAttribute("src", "/audios/So_High.mp3");

// play pause
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    songImg.classList.remove("rotate");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    songImg.classList.add("rotate");
  }
}

if (song.play) {
  setInterval(() => {
    progres.value = song.currentTime;
  }, 400);
}

progres.onchange = function () {
  song.play();
  song.currentTime = progres.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

// next song............................................

// let myVal = 0;
// // change Next song
// function changeSongNext() {
//   if (myVal == arr.length - 1) {
//     myVal = 0;
//   }
//   console.log(myVal);
//   myVal = myVal + 1;
//   source.setAttribute("src", `${arr[myVal]}`);
//   song.onloadedmetadata = function () {
//     progres.max = song.duration;
//     progres.value = song.currentTime;
//     song.currentTime = 0;
//     song.play();
//   };
// }
// change prev song
// function changeSongPrev() {
//   if (i == 0) {
//     i = arr.length - 1;
//   }
//   i = i - 1;
//   source.setAttribute("src", `${arr[i]}`);
// }
