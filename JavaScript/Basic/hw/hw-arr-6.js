const arr = ["Oleg", "Maxim", "Katerina", "Igor", "Vladislav"];

console.log(arr.splice(0, 2));

function replace() {
  const indVlad = arr.indexOf("Vladislav");
  const indIgor = arr.indexOf("Igor");

  [arr[indIgor], arr[indVlad]] = [arr[indVlad], arr[indIgor]];

    return arr;
}

console.log(replace(arr));