const table = document.getElementById("board");
const ROWS = 10;
const COLS = 10;
const BOMBS = 10;

// Generate table
for (let i = 0; i < ROWS; i++) {
  const row = table.insertRow();
  for (let j = 0; j < COLS; j++) {
    const cell = row.insertCell();
    cell.innerHTML = "0";
  }
}

// Place bombs randomly
const cells = table.getElementsByTagName("td");
const bombIndices = getRandomIndices(BOMBS, ROWS * COLS);
for (let i = 0; i < bombIndices.length; i++) {
  cells[bombIndices[i]].innerHTML = "X";
}

// Helper function to generate unique random indices
function getRandomIndices(n, max) {
  const indices = new Set();
  while (indices.size < n) {
    indices.add(Math.floor(Math.random() * max));
  }
  return Array.from(indices);
}
