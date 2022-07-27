const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let sepereted = expr.match(/.{1,10}/g);

  let answer = "";
  for (let i = 0; i < sepereted.length; i++) {
    let morse = "";
    for (let j = 0; j < sepereted[i].length; j++) {
      if (sepereted[i][j] === "1") {
        if (sepereted[i][j + 1] === "0") {
          morse += ".";
        } else {
          morse += "-";
        }
        j++;
      }
    }
    if (MORSE_TABLE[morse] == undefined) {
      answer += " ";
    } else {
      answer += MORSE_TABLE[morse];
    }
  }
  console.log(answer);
  return answer;
}

module.exports = {
  decode,
};
