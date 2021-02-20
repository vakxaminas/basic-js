const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type || false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.alphabetSize = this.alphabet.length;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Invalid input data");
    let newCharacter = "";
    let result = "";
    let keyCharacterIndex = 0;
    let msgCharacterIndex = 0;
    let newCharacterIndex = 0;
    let forKey = [];
    key = key.toUpperCase();
    message = message.toUpperCase();

    for (let i = 0; key.length < message.length; i++) {
      key += key;
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        key = key.split("");
        key.splice(i, 0, " ");
        key = key.join("");
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        keyCharacterIndex = this.alphabet.indexOf(key[i]);
        msgCharacterIndex = this.alphabet.indexOf(message[i]);
        newCharacterIndex =
          (msgCharacterIndex + keyCharacterIndex) % this.alphabetSize;

        newCharacter = this.alphabet[newCharacterIndex];
      } else newCharacter = message[i];
      result += newCharacter;
    }

    if (this.type) result = result.split("").reverse().join("");
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Invalid input data");
    let newCharacter = "";
    let result = "";
    let keyCharacterIndex = 0;
    let msgCharacterIndex = 0;
    let newCharacterIndex = 0;
    key = key.toUpperCase();
    message = message.toUpperCase();

    for (let i = 0; key.length < message.length; i++) {
      key += key;
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        key = key.split("");
        key.splice(i, 0, " ");
        key = key.join("");
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        keyCharacterIndex = this.alphabet.indexOf(key[i]);
        msgCharacterIndex = this.alphabet.indexOf(message[i]);
        newCharacterIndex =
          (msgCharacterIndex + this.alphabetSize - keyCharacterIndex) %
          this.alphabetSize;

        newCharacter = this.alphabet[newCharacterIndex];
      } else newCharacter = message[i];
      result += newCharacter;
    }

    if (this.type) result = result.split("").reverse().join("");
    return result;
  }
}

module.exports = VigenereCipheringMachine;
