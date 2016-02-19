'use strict';
module.exports = function (input, oxford) {
  const argLength = arguments.length;
  if (oxford === undefined) {
    oxford = true;
  }

  if (!Array.isArray(input)) {
    throw new TypeError(`Expected input to be an array, got ${typeof input}`);
  }
  if (typeof oxford !== 'boolean') {
    throw new TypeError(`Expected oxford to be a boolean, got ${typeof oxford}`);
  }
  const allStrings = input.every(curr => {
    return (typeof curr === 'string');
  });
  if (allStrings === false) {
    throw new Error(`Expected all elements of input array to be strings. Consider a map call to cast all elements to strings`);
  }

  if (argLength !== 1 && argLength !== 2) {
    throw new Error(`Expected 1 or 2 arguments, got ${argLength}`);
  }

  const len = input.length;
  if (len === 0) {
    throw new Error(`Expected input array length >= 1, got ${input.length}`);
  } else if (len === 1) {
    return `${input[0]}`;
  } else if (len === 2) {
    return `${input[0]} and ${input[1]}`;
  } else {
    let myString = `${input[0]}`;
    for (let i = 1; i < input.length; i++) {
      if (i < input.length - 1) {
        myString += `, ${input[i]}`;
      } else {
        myString += oxford === true ? `, and ${input[i]}` : ` and ${input[i]}`;
      }
    }
    return myString;
  }
};
