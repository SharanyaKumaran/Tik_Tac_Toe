let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");

let turno = true;
let turnx = 0;

let winPattern=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,2,8],[2,4,6]
];

boxes.forEach(box => {
    box.addEventListener("click", function() {
        if (!box.innerHTML) { 
            if (turno) {
                box.innerHTML = "O";
            } else {
                box.innerHTML = "X";
            }
            turno = !turno; 
            turnCount++;

        
            checkWinner();
        }
    });
});
function checkWinner() {
    let board = Array.from(boxes).map(box => box.innerHTML);
    for (let pattern of winPatterns) {
      let [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert(`${board[a]} wins!`);
        resetGame();
        return;
      }
    }
    if (turnCount === 9) {
      alert("It's a draw!");
      resetGame();
    }
  }

  function resetGame() {
    boxes.forEach(box => {
      box.innerHTML = "";
    });
    turno = true;
    turnCount = 0;
  }

  resetButton.addEventListener("click", resetGame);