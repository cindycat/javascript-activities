//variable kelvin has the value of 293
const kelvin = 0;

//This is the formula for variable celcius
const celsius = kelvin - 273;

//convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//round down the result of farenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


let newton = celsius * (33/100);

newton = Math.floor(newton); 

console.log(`Newton: ${newton}`);
