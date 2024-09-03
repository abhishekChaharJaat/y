const ans = ["c", "d", "d", "a", "c"];
let subAns = [];

let i = 0;
function result() {
  let que = document.querySelectorAll(".questions");
  que.forEach((q) => {
    let options = q.getElementsByClassName("check");

    Array.from(options).forEach((op) => {
      if (op.checked) {
        subAns[i] = op.value;
      }
    });
    i++;
  });

  yourScore();
}

function yourScore() {
  let box12 = document.querySelector(".box12");
  let score = 0;
  ans.forEach((ele, idx) => {
    if (ele == subAns[idx]) {
      score++;
    }
  });
  let h2 = document.createElement("h1");
  h2.textContent = `your Score is : ${score}/${ans.length}`;
  box12.innerHTML = "";
  box12.append(h2);
}
