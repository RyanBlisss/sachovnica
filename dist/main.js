"use strict";
let board = document.getElementById("chessboard");
// let piacees_in_ascii =
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        let square = document.createElement("div");
        // square.class("square");
        // square.className("square");
        // square.classList("square");
        square.classList.add("square");
        // if ((row % 2 == 0 && col % 2 == 0) || (row % 2 == 1 && col % 2 == 1)) {
        if ((row + col) % 2 == 0) {
            square.classList.add("white");
        }
        else {
            square.classList.add("black");
        }
        let index = row + col;
        square.style.animationDelay = `${index * 0.05}s`;
        let chess_peace = document.createElement("p");
        const pieces_black = [
            "\u265C",
            "\u265E",
            "\u265D",
            "\u265B",
            "\u265A",
            "\u265D",
            "\u265E",
            "\u265C",
            "\u265F",
        ];
        if (row === 0) {
            chess_peace.textContent = pieces_black[col];
            chess_peace.classList.add("black-piece");
        }
        else if (row === 1) {
            chess_peace.textContent = pieces_black[8];
            chess_peace.classList.add("black-piece");
        }
        else if (row === 6) {
            chess_peace.textContent = pieces_black[8];
            chess_peace.classList.add("white-piece");
        }
        else if (row === 7) {
            chess_peace.textContent = pieces_black[col];
            chess_peace.classList.add("white-piece");
        }
        chess_peace.classList.add("piece");
        square.appendChild(chess_peace);
        board.appendChild(square);
    }
}
