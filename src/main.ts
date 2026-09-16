let board = document.getElementById("chessboard") as HTMLElement;

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
    } else {
      square.classList.add("black");
    }

    let index = row + col;
    square.style.animationDelay = `${index * 0.05}s`;

    let chess_peace = document.createElement("p");
    const pieces_black = ["R", "N", "B", "Q", "&#9812;", "B", "N", "R", "P"];
    const pieces_white = ["R", "N", "B", "Q", "&#9812;", "B", "N", "R", "P"];
    if (row === 0) chess_peace.textContent = pieces_black[col];
    else if (row === 1) chess_peace.textContent = pieces_black[8];
    else if (row === 6) chess_peace.textContent = pieces_white[8];
    else if (row === 7) chess_peace.textContent = pieces_white[col];
    chess_peace.classList.add("piece");

    square.appendChild(chess_peace);

    board.appendChild(square);
  }
}
