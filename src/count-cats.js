const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const cat = "^^";
  let result = 0;

  for (let arr of matrix) {
    for (elem of arr) {
      if (elem == cat) result++;
    }
  }

  return result;
};
