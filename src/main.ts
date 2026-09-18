let board = document.getElementById("chessboard") as HTMLElement;
let row_numbers = document.getElementById("row-numbers") as HTMLElement;

for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    let internal_row = row != 9 ? row : row;
    let internal_col = col != 9 ? col - 1 : col;

    if (row != 8 && col != 0) {
      let chess_peace = document.createElement("p");
      const pieces = [
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

      let square = document.createElement("div");

      // square.class("square");
      // square.className("square");
      // square.classList("square");
      square.classList.add("square");

      // if ((internal_row % 2 == 0 && internal_col % 2 == 0) || (row % 2 == 1 && col % 2 == 1)) {
      if ((internal_row + internal_col) % 2 == 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }

      let index = internal_row + internal_col;
      square.style.animationDelay = `${index * 0.05}s`;

      if (internal_row === 0) {
        chess_peace.textContent = pieces[internal_col];
        chess_peace.classList.add("black-piece");
      } else if (internal_row === 1) {
        chess_peace.textContent = pieces[8];
        chess_peace.classList.add("black-piece");
      } else if (internal_row === 6) {
        chess_peace.textContent = pieces[8];
        chess_peace.classList.add("white-piece");
      } else if (internal_row === 7) {
        chess_peace.textContent = pieces[internal_col];
        chess_peace.classList.add("white-piece");
      }
      chess_peace.classList.add("piece");

      square.appendChild(chess_peace);

      board.appendChild(square);

      continue;
    }

    if (col == 0 && row != 8) {
      let board_y_number: number[] = (() => {
        let a = [];
        for (let i = 1; i <= 8; i++) a.push(i);
        return a;
      })();

      let internal_col_number = document.createElement("div");
      internal_col_number.classList.add("center");
      internal_col_number.classList.add("col");
      internal_col_number.textContent =
        board_y_number[internal_row]?.toString() || "";
      internal_col_number.style.animationDelay = `${internal_row * 0.05}s`;
      board.appendChild(internal_col_number);
      continue;
    }

    let board_x_number = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let internal_row_number = document.createElement("div");
    internal_row_number.classList.add("numbered");
    internal_row_number.classList.add("row");
    internal_row_number.textContent =
      board_x_number[internal_col]?.toString() || "";
    internal_row_number.style.animationDelay = `${internal_col * 0.05}s`;
    board.appendChild(internal_row_number);
  }
}
