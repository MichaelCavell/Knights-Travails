function knightMoves(start, end) {
  const moves = [
    { row: -2, col: -1 },
    { row: -2, col: 1 },
    { row: -1, col: -2 },
    { row: -1, col: 2 },
    { row: 1, col: -2 },
    { row: 1, col: 2 },
    { row: 2, col: -1 },
    { row: 2, col: 1 },
  ];

  const isValidMove = (row, col) => row >= 0 && row < 8 && col >= 0 && col < 8;

  const queue = [start.slice()];
  const visited = {};
  visited[start.toString()] = true;
  const path = {};
  path[start.toString()] = null;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.toString() === end.toString()) {
      const result = [];
      let node = current;
      while (node !== null) {
        result.unshift(node);
        node = path[node.toString()];
      }
      return result;
    }

    for (const move of moves) {
      const newRow = current[0] + move.row;
      const newCol = current[1] + move.col;
      const newPosition = [newRow, newCol];

      if (isValidMove(newRow, newCol) && !visited[newPosition.toString()]) {
        visited[newPosition.toString()] = true;
        queue.push(newPosition.slice());
        path[newPosition.toString()] = current;
      }
    }
  }

  return null;
}


const startSquare = [3, 3];
const endSquare = [4, 3];

const shortestPath = knightMoves(startSquare, endSquare);

if (shortestPath) {
  console.log(`You made it in ${shortestPath.length - 1} moves! Here's your path:`);
  shortestPath.forEach(position => console.log(position));
}