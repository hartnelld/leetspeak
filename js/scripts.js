/**

Leetspeak Translator
Rules:

1. "e" converted to "3"
2. "o" converted to "0"
3. "I" converted to "1"
4. "s" converted to "z" unless "s" is first letter of word

**/

var translate = function(input) {

  var inputArray = input.split('');

  // Function to check if character is first in word
  var isFirst = function(index) {
    if (((inputArray[index].toLowerCase() === "s") && (inputArray[index-1] === " ")) || index === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Function to iterate through each character and perform translation
  var replaceText = function(input) {
    for (i = 0; i < inputArray.length; i++) {
      inputArray[i] = inputArray[i].replace(/e/i, "3");
      inputArray[i] = inputArray[i].replace(/o/i, "0");
      inputArray[i] = inputArray[i].replace(/I/, "1");

      if (!isFirst(i)) {
        inputArray[i] = inputArray[i].replace(/s/gi, "z");
      }
    }
    return inputArray.join('');
  }

  return replaceText(input);
};
