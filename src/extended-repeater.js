const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.addition && options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;

  let repeatEndingArr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    repeatEndingArr.push(String(options.addition));
  }

  let repeatEndingStr = repeatEndingArr.join(options.additionSeparator);
  let strForRepeat = String(str) + repeatEndingStr;
  let repeatArr = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    repeatArr.push(strForRepeat);
  }

  let repeatStr = repeatArr.join(options.separator);

  return repeatStr;
};
