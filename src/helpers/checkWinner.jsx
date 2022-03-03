export const checkWinner = (arr, player) => {
  if (
    (arr[0] === arr[1] && arr[0] === arr[2] && arr[2] !== "") ||
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] !== "") ||
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] !== "") ||
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] !== "") ||
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] !== "") ||
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] !== "") ||
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] !== "") ||
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] !== "")
  ) {
    alert(`${player} WINS !`);
  }
  return arr;
};
