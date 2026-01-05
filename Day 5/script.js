let boxes = document.querySelectorAll(".box");
let choiceList = document.querySelector(".select");
let playground = document.querySelector(".playground");
let result = document.querySelector(".result");
let cross = [];
let circle = [];

choiceList.turn = 0;

const checkWin = (arr) => {
  const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const condition of winConditions) {
    if (condition.every((element) => arr.includes(element))) {
      return true;
    }
  }
};

const checkDraw = (arr) => {
  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (all.every((element) => arr.includes(element))) {
    return true;
  }
};

const reset = (cross, circle) => {
  let boxes = document.querySelectorAll(".box");
  for (const box of boxes) {
    box.style.backgroundImage = "";
  }
};

let x = document.querySelector(".x");
let o = document.querySelector(".o");

x.onclick = () => {
  playground.classList.toggle("disable");
  choiceList.style.display = "none";
  turn = 1;
  boxes.forEach((box, key) => {
    box.onclick = () => {
      if (turn === 1) {
        if (!box.style.backgroundImage) {
          box.style.backgroundImage = "url('assets/cross.svg')";
          cross.push(key + 1);

          if (checkWin(cross)) {
            setTimeout(() => {
              result.innerHTML = "X wins";
              reset(cross, circle);
              cross = [];
              circle = [];
            }, 10);
          }
          turn = 0;
        }
      } else if (turn === 0) {
        if (!box.style.backgroundImage) {
          box.style.backgroundImage = "url('assets/circle.svg')";
          circle.push(key + 1);
          if (checkWin(circle)) {
            setTimeout(() => {
              result.innerHTML = "O wins";
              reset(cross, circle);
              cross = [];
              circle = [];
            }, 10);
          }
          turn = 1;
        }
      }
      if (checkDraw(cross + circle)) {
        result.innerHTML = '😐 Draw'
        reset(cross, circle);
        cross = [];
        circle = [];
      }
    };
  });
};

o.onclick = () => {
  choiceList.classList.toggle("disable");
  playground.classList.toggle("disable");
  turn = 0;
  boxes.forEach((box, key) => {
    box.onclick = () => {
      if (turn === 1) {
        if (!box.style.backgroundImage) {
          box.style.backgroundImage = "url('assets/cross.svg')";
          cross.push(key + 1);
          
          if (checkWin(cross)) {
            setTimeout(() => {
              result.innerHTML = "X wins";
              reset(cross, circle);
              cross = [];
              circle = [];
            }, 10);
          }
          turn = 0;
        }
      } else if (turn === 0) {
        if (!box.style.backgroundImage) {
          box.style.backgroundImage = "url('assets/circle.svg')";
          circle.push(key + 1);
          if (checkWin(circle)) {
            setTimeout(() => {
              result.innerHTML = "O wins";
              reset(cross, circle);
              cross = [];
              circle = [];
            }, 10);
          }
          if (checkDraw(cross + circle)) {
            result.innerHTML = '😐 Draw'
            reset(cross, circle);
            cross = [];
            circle = [];
          }
          turn = 1;
        }
      }
    };
  });
};
