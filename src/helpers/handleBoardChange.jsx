export const handleBoardChange = (arr, i, placeholder) => {
  // const newArr = arr[i] === "" ? arr.splice(i, 1, placeholder) : alert("error");
  arr.splice(i, 1, placeholder);
  // console.log(arr);
  return arr;
};
