"use sctrict";
const formatString = function (string) {
  if (string.length > 40) {
    string = string.split('');
    string.length = 40;
    string[40] = "...";
    string = string.join('');
    return string;
  }
  return string;
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
