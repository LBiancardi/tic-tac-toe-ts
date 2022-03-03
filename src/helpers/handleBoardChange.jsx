export const handleBoardChange = (arr, i, placeholder) => {
  const newArr = arr.splice(i, 1, placeholder);
  return arr;
};
