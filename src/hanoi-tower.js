const CustomError = require("../extensions/custom-error");

const secondsInHour = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor((turns / turnsSpeed) * secondsInHour);

  return { turns, seconds };
};
