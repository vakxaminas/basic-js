const CustomError = require("../extensions/custom-error");

const sequences = [
  "--discard-next",
  "--discard-prev",
  "--double-next",
  "--double-prev",
];

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  let arrCopy = arr.slice();
  let transformedArr = [];

  for (let i = 0; i < arrCopy.length; i++) {
    if (sequences.includes(arrCopy[i])) {
      if (arrCopy[i] == "--discard-next" && i !== arrCopy.length - 1) {
        transformedArr.push(arrCopy[i]);
        arrCopy.splice(i + 1, 1);
      }
      if (arrCopy[i] == "--double-next" && i !== arrCopy.length - 1) {
        transformedArr.push(arrCopy[i]);
        arrCopy.splice(i + 1, 0, arrCopy[i + 1]);
      }
      if (arrCopy[i] == "--discard-prev" && i !== 0) {
        transformedArr.pop();
        transformedArr.push(arrCopy[i]);
      }
      if (arrCopy[i] == "--double-prev" && i !== 0) {
        transformedArr.push(arrCopy[i - 1]);
        transformedArr.push(arrCopy[i]);
      }
    } else transformedArr.push(arrCopy[i]);
  }

  transformedArr = transformedArr.filter((item) => !sequences.includes(item));

  return transformedArr;
};
