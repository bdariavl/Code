const obj = {a: 10, b: 10, c: 80};

function checkValues(obj) {
	// функція має виводити true 
	// якщо obj має у сумі показників значень a,b,c число більше за 50
    const sum = obj.a + obj.b + obj.c;
    return sum > 50;
}

const result = checkValues(obj);
console.log(result);