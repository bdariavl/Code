// Дано
const str1 = "Hello";
// Зробіть останню літеру строки str1 великою, а першу - маленькою
const firstLetter = str1.slice(0, 1).toLowerCase();
const lastLetter = str1.slice(str1.length - 1).toUpperCase();
console.log(firstLetter + str1.slice(1, -1) + lastLetter);

// Дано
const str2 = "daryna";
// напишіть ваше їм'я з великої літери (регістр першої літери)
const capitStr2 = str2.slice(0, 1).toUpperCase();
console.log(capitStr2 + str2.slice(1));

// Дано
const n = 12.6436;
// Залишіть 2 символи після коми, додайте символ $ на початок та кінець
const dol = "$";
console.log(dol.concat(n.toFixed(2), dol));

const str3 = "H!el*l000o";
// Порахуйте кількість літер у str3 (саме літер)
console.log(str3.replace("!", "").replace("*", "").replaceAll("0", "").length);
