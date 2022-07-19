// The Fortune Teller
function tellFortune (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids`);
    console.log();
}
tellFortune(2, 'Anne', 'Berlin', 'student')
tellFortune(1, 'Catharina', 'Porto', 'Bartender')
tellFortune(5, 'Friedrica', 'London', 'Backer')
console.log('-----------------------------------------');

// The Puppy Age Calculator
function calculateDogAge (dog, human) {
    dogAge = dog * 7;
       console.log(`Your dog is ${dogAge} years old in dog years!`);
       humanAge = human / 7;
       console.log(`Your human is ${humanAge} years old in human years!`);
}
calculateDogAge (4, 28);
console.log('-----------------------------------------');


// The Lifetime Supply Calculator
function calculateSupply (age, amountPerDay) {
        const maxAge = 100;
        amountConsume = (maxAge - age) * amountPerDay * 365;
        
        console.log(`You will need ${Math.round(amountConsume)} to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(38, 3);
calculateSupply(55, 5);
calculateSupply(76, 5);
calculateSupply(44, 1.3);
console.log('-----------------------------------------');



// The Geometrizer

function calcCircumfrence (radius) {
    let circumFerence = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumFerence}`);

}
calcCircumfrence(5);
console.log('-------------------------------');

function calcArea (radius) {
    let area = Math.PI * radius ** 2;
    console.log(`The area is ${area}`);
}
calcArea(8);
console.log('--------------------------------');


// The Temperature Converter

function celsiusToFahrenheit(celsius) {
    
    let celsiusTemp = celsius;
    
    let fahrenheitConverted = (celsiusTemp / 5) * 9 + 32;
    
    console.log(`${celsiusTemp}°C is ${fahrenheitConverted}°F`);
}

celsiusToFahrenheit(0);

console.log('-------------------------------');

function fahrenheitToCelsius(fahrenheit) {

   let fahrenheitTemp = fahrenheit;

   let celsiusConvert = (fahrenheitTemp - 32) * 5 / 9;

    console.log(`${fahrenheitTemp}°F is ${celsiusConvert}°C`);
}

fahrenheitToCelsius(32);

console.log('---------------------------------');