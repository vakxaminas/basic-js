const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  glue: "~~",

  getLength() {
    return this.chain.length;
  },
  addLink(value = "") {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (
      this.chain[position] === undefined ||
      typeof position !== "number" ||
      Math.round(position) !== position
    ) {
      this.chain = [];
      throw new Error("Invalid position");
    }
    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let arrWithBrackets = this.chain.map((item) => "( " + item + " )");
    this.chain = [];
    return arrWithBrackets.join(this.glue);
  },
};

module.exports = chainMaker;
