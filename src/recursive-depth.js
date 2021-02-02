const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length === 0) arr.push(1);

      let temp = arr.map((element) => this.calculateDepth(element));
      let maxInTemp = Math.max.apply(null, temp);

      return 1 + maxInTemp;
    } else return 0;
  }
};
