const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let onlyStrings = members.filter((item) => typeof item === "string");
  if (onlyStrings.length === 0) return false;

  onlyStrings = onlyStrings.map((item) => item.trim()[0].toUpperCase());

  return onlyStrings.sort().join("");
};
