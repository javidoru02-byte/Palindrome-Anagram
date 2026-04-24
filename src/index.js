/**
 * Перевіряє чи є рядок паліндромом
 * @param {string} str - слово чи рядок який перевіряється на поліндром
 * @returns {boolean} - true якщо поліндром false якщо не поліндром аюо не відповідає умові
 */
function isPolindrom(str) {
  if (typeof str !== "string") {
    return false;
  }

  const word = str.toLowerCase().replace(/ /g, "");
  let revers = "";
  for (let i = word.length - 1; i >= 0; i--) {
    revers += word[i];
  }
  let polindrome = true;
  if (revers != word) {
    polindrome = false;
    return polindrome;
  }
  return polindrome;
}

const polindrom = isPolindrom("121");

if (polindrom) {
  console.log("Строка поліндром");
} else {
  console.log("Строка не є поліндромом");
}



/**
 * Перевіряє чи є два рядки анаграмами
 *
 * @param {string} first - перший рядок
 * @param {string} second - другий рядок
 * @returns {boolean} true якщо анаграми, false якщо ні
 */
function isAnagram(first, second) {
  if (typeof first !== "string" || typeof second !== "string") {
    return false;
  }

  const firstString = first.toLowerCase().replace(/ /g, "");
  const secondString = second.toLowerCase().replace(/ /g, "");

  if (firstString.length !== secondString.length) {
    return false;
  }

  const charCounter = {};

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString[i];
    charCounter[char] = charCounter[char] ? charCounter[char] + 1 : 1;
  }

  for (let i = 0; i < secondString.length; i++) {
    const char = secondString[i];
    if (!charCounter[char]) {
      return false;
    }
    charCounter[char]--;
  }
  return true;
}

const anagram = isAnagram("казан", "наказ");
if (anagram) {
  console.log("Строка анаграм");
} else {
  console.log("Строка не анаграм");
}
