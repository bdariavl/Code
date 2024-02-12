// Дано

function repeat(message, times) {
  // опишіть функцію repeat так, щоб вона виводила message [times] разів (while)
  let counter = 0;

  while (counter < times) {
    console.log(message);
    counter = counter + 1;
  }
}

repeat("Hello", 5);
repeat("Daryna", 10);
repeat(":)", 15);

// Дано

function getMonthsOf(season) {
  // опишіть функцію getMonthsOf, яка залежно від пори року
  // (winter, summer, autumnm, spring) поверне її місяці як строку (switch-case)

const normalizedSeason = season.toLowerCase().trim();

  switch (normalizedSeason) {
    case "summer":
        return "June, July, August";

    case "autumn":
        return "September, October, November";

    case "winter":
        return "December, January, February";

    case "spring":
        return "March, April, May";

    default:
  }
}

const summerMonths = getMonthsOf("summer"); // -> June, July, August
console.log(summerMonths);

const autumnMonths = getMonthsOf("autumn");
console.log(autumnMonths);

const winterMonths = getMonthsOf("winter");
console.log(winterMonths);

const springMonths = getMonthsOf("spring");
console.log(springMonths);