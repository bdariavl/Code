const data = {
  a: 100,
  b: 300,
  c: 400,
  d: 500,
  e: 600,
  f: 700,
  g: 800,
};

const lowData = {}; // до 300 (включно)
const bigData = {}; // після 300

// За допомогою циклу опрацюйте данні так, щоб менші значення були у lowData,
// більші у bigData


function sortData(data) {
	for (const key in data) {
		let value = data[key];
		if (value <= 300) {
			lowData[key] = value;
		} else {
			bigData[key] = value;
		}
	}

	return {lowData, bigData};
}
const result = sortData(data);

console.log(result.lowData);
console.log(result.bigData);