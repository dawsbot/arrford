'use strict';
module.exports = function (input, oxford, join) {
  const argLength = arguments.length;

  if (typeof oxford === 'undefined') {
    oxford = true;
  }
  join = typeof join === 'undefined' ? 'and' : join;

  if (!Array.isArray(input)) {
    throw new TypeError(`Expected input to be an array, got ${typeof input}`);
  }
  if (typeof oxford !== 'boolean') {
    throw new TypeError(`Expected oxford to be a boolean, got ${typeof oxford}`);
  }
  if (typeof join !== 'string') {
    throw new TypeError(`Expected join to be a string, got ${typeof join}`);
  }

  const allStrings = input.every(curr => {
    return (typeof curr === 'string');
  });
  if (allStrings === false) {
    throw new Error(`Expected all elements of input array to be strings. Consider a map call to cast all elements to strings`);
  }

  if (argLength !== 1 && argLength !== 2 && argLength !== 3) {
    throw new Error(`Expected 1, 2 or 3 arguments, got ${argLength}`);
  }

  switch (input.length) {
    case 0: {
      return input;
    }
    case 1: {
      return input[0];
    }
    case 2: {
      return `${input[0]} ${join} ${input[1]}`;
    }
    default: {
      let returnString = input[0];
      for (let i = 1; i < input.length; i++) {
        if (i < input.length - 1) {
          returnString += `, ${input[i]}`;
        } else {
          returnString += oxford ? ',' : '';
          returnString += ` ${join} ${input[i]}`;
        }
      }
      return returnString;
    }
  }
};
