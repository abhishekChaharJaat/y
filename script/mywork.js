// -------------------------- Change color ------------------------------- //

function changeColor(clr) {
  let x = document.getElementById("box");
  x.style.background = clr;
}

// -------------------------- Progress Bar ------------------------------- //

let outerCircle = document.querySelector(".outer-circle");
let perValue = document.querySelector(".percent");
let startValue = 0;
let endValue = 73;
let interval = setInterval(progress, 30);
function progress() {
  startValue++;
  outerCircle.style.background = `conic-gradient(darkcyan ${
    startValue * 3.6
  }deg, rgb(218, 216, 216) 0deg)`;
  perValue.textContent = `${startValue}%`;
  if (startValue == endValue) {
    clearInterval(interval);
  }
}

// ----------------------------- Typed Text ------------------------------- //

let nam = "Hello user welcome to javascript....";
let text = "";
let i = 0;

let x = setInterval(print, 200);
function print() {
  text = text + nam[i];
  document.getElementById("name").innerHTML = text;
  i++;

  if (i == nam.length) {
    text = "";
    i = 0;
    // clearInterval(x);
  }
}

// ------------------------- Counter ------------------------------- //

let defaultVal = 20;
let count = defaultVal;
let counterInterval;
const cStart = () => {
  if (interval) {
    clearInterval(counterInterval);
  }
  counterInterval = setInterval(counter, 1000);

  function counter() {
    count = count - 1;
    document.getElementById("number").innerHTML = count;

    if (count == 0) {
      clearInterval(counterInterval);
      document.getElementById("number").innerHTML = "GO";
    }
  }
};

let cReset = () => {
  clearInterval(counterInterval);
  count = defaultVal;
  document.getElementById("number").innerHTML = count;
};

let cStop = () => {
  clearInterval(counterInterval);
};

// ----------------------------- Stop Watch ------------------------------- //

let hr = 0;
let min = 0;
let sec = 0;

let watchInterval;
// document.getElementById("hour").innerHTML = hr;
// document.getElementById("min").innerHTML = min;
// document.getElementById("second").innerHTML = sec;
function wStart() {
  if (watchInterval) {
    clearInterval(watchInterval);
  }
  watchInterval = setInterval(secTimer, 1000);

  function secTimer() {
    if (sec < 10) {
      document.getElementById("second").innerHTML = "0" + sec;
    } else {
      document.getElementById("second").innerHTML = sec;
    }
    sec = sec + 1;
    if (sec == 60) {
      sec = 0;
      setTimeout(minTimer, 1000);
      function minTimer() {
        min = min + 1;
        if (min < 10) {
          document.getElementById("min").innerHTML = "0" + min;
        } else {
          document.getElementById("min").innerHTML = min;
        }

        if (min == 60) {
          min = 0;

          setTimeout(hrTimer, 0);
          function hrTimer() {
            hr = hr + 1;
            if (min < 10) {
              document.getElementById("min").innerHTML = "0" + min;
            } else {
              document.getElementById("min").innerHTML = min;
            }
            if (hr < 10) {
              document.getElementById("hour").innerHTML = "0" + hr;
            } else {
              document.getElementById("hour").innerHTML = hr;
            }
          }
        }
      }
    }
  }
}
function wReset() {
  min = 0;
  sec = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
  clearInterval(watchInterval);
}

function wStop() {
  clearInterval(watchInterval);
}

// -----------------------------Clock ------------------------------- //
let clockHour = document.getElementById("clock-hour");
let clockMin = document.getElementById("clock-min");
let clockSec = document.getElementById("clock-sec");

const clock = () => {
  let clockD = new Date();
  let clockH = clockD.getHours();
  let clockM = clockD.getMinutes();
  let clockS = clockD.getSeconds();

  if (clockH < 10) {
    clockHour.innerHTML = "0" + clockH;
  } else {
    clockHour.innerHTML = clockH;
  }
  if (clockM < 10) {
    clockMin.innerHTML = "0" + clockM;
  } else {
    clockMin.innerHTML = clockM;
  }
  if (clockS < 10) {
    clockSec.innerHTML = "0" + clockS;
  } else {
    clockSec.innerHTML = clockS;
  }
};

setInterval(clock, 1000);

// ----------------------------- 10. Random Password Generator ------------------------------- //
class Password {
  constructor() {
    console.log("Welcome to password geenrator");
  }

  generatePassword(len) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let nums = "1234567890";
    let special = "@#$%&*";
    let pass = "";
    if (len < 4) {
      alert("Enter your password length");
      return;
    } else if (len > 20) {
      alert("Choose length under 20");
      return;
    } else {
      let i = 0;
      while (i < len) {
        pass += chars[Math.floor(Math.random() * chars.length)];
        pass += nums[Math.floor(Math.random() * nums.length)];
        pass += special[Math.floor(Math.random() * special.length)];
        i += 3;
      }
      pass = pass.substring(0, len);
      return pass;
    }
  }
}

let p = new Password();
let lengthInput = document.getElementById("length-input");
let yourPassword = document.getElementById("your-password");

const generatePassword = () => {
  let generatedPass = p.generatePassword(lengthInput.value);
  yourPassword.innerHTML = "Password: " + generatedPass;
  lengthInput.value = "";
};
