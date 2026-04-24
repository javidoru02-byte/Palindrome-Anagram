function isPolindrom(str) {
  if (typeof str !== "string") {
    return null;
  }

  const word = str.toLowerCase().replace(/" "/g, "");
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

const polindrom = isPolindrom("Q W Q");
if (polindrom === null) {
  console.log("Помилка: аргумент має бути рядком");
} else if (polindrom) {
  console.log("Слово поліндром");
} else {
  console.log("Слово не є поліндромом");
}
