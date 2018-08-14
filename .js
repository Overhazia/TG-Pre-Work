//value saved to kelvin will stay constant
const kelvin = 293;
//converts kelvin to celcius
const celsius = kelvin - 273;
//variable fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//rounds down fahrenheit temp to nearest whole
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);