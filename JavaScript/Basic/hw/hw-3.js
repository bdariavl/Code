// Дано:

function task1() {
	const str1 = "String number one";
	const str2 = "String number two";

    if (str1.length > str2.length) {
        console.log(str1);
    } 
    if (str1.length < str2.length) {
        console.log(str2);
    } else {
        console.log("They are equal :)")
    }
}

task1();


// Дано: 

function task2() {
	const str = "JavaScript";
	const repeatTimes = 12; 
	
    const repeat = str.repeat(repeatTimes);

    if (str.repeat(repeatTimes).length > 100) {
        console.log(repeat);
    }
// "Повторіть" (repeat) строку str [repeatTimes] разів. 
// Виведіть її у консоль тільки якщо після repeat довжина строки стала більшою за 100
}

task2();