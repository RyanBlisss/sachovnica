"use strict";
let board = document.getElementById("chessboard");
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let square = document.createElement("div");
    // square.class("square");
    // square.className("square");
    // square.classList.add("square");
    // if ((row % 2 == 0 && col % 2 == 0) || (row % 2 == 1 && col % 2 == 1)) {
    if ((row + col) % 2 == 0) {
      square.classList.add("white");
    } else {
      square.classList.add("black");
    }
    board.appendChild(square);
  }
}
