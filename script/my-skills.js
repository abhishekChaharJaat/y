class progressBar {
  constructor(idx, endVal) {
    this.idx = idx;
    this.endVal = endVal;
  }
  subject() {
    let startVal = 0;
    let end = this.endVal;
    let outer = document.getElementsByClassName("outer-circle")[this.idx];
    let inner = document.getElementsByClassName("inner-circle")[this.idx];
    let interval = setInterval(progress, 30);
    function progress() {
      if (startVal == end) {
        clearInterval(interval);
      }

      outer.style.background = `conic-gradient(blue ${
        startVal * 3.6
      }deg, rgb(218, 218, 218) 0deg)`;
      inner.textContent = `${startVal}%`;
      startVal++;
    }
  }
}

// HTML
let html = new progressBar(0, 75);
html.subject();
//CSS
let css = new progressBar(1, 60);
css.subject();
// Java Script
let javascript = new progressBar(2, 55);
javascript.subject();
// React
let react = new progressBar(3, 15);
react.subject();
// Java
let java = new progressBar(4, 50);
java.subject();
// C
let c = new progressBar(5, 65);
c.subject();
