/*
1. Num 'e'
2. Encode
3. Rounding
4. Trable of rounding
5. Check
6. Extract numb
7. Random
8. Max
9. Min 
10. Abs
11. pow
*/


console.log('~~~ 1. Num "e" ~~~')
let someBigNum = 1e6; // 1 * 1000000 
console.log(someBigNum);

let someLittleNum = 1e-6;
console.log(someLittleNum);



console.log('~~~ 2. Encode ~~~');
// 1 Hexadecimal
console.log(0xFF);

// 2 binarsystem
console.log(0b111111111);

// 3 Octalsystem
console.log(0o377);

// Encoding to a specific encoding
let num = 255;
console.log(num.toString(16)); // to hexadecimal
console.log(num.toString(8)); // to octalsystem



console.log('~~~ 3. Rounding ~~~');
console.log('### в меньшую сторону floor ###');
let numOne = Math.floor(5.8);
console.log(numOne);

console.log('### в большую сторону ceil ###');
let numTwo = Math.ceil(5.2); 
console.log(numTwo);

console.log('### в близжайшую сторону round ###');
let numThree = Math.round(5.3233);
console.log(numThree);



console.log('~~~ 4. Trable of rounding ~~~');
// Error:
let sourceFalseNum = 1.005;
let numFalseFour = Math.round(sourceFalseNum * 100) / 100;
console.log(`${numFalseFour} - ненужное число`);

// Solution:
let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(`${numFour} - нужное число`);



console.log('~~~ 5. Check ~~~');

console.log('### 1. isNaN ###');
if (25 + "Привет!" !== NaN) {
    console.log('Я не NaN');
} // не сработает должным образом, потому что NaN в каждом случае уникален
if (isNaN(25 + 'Привет!')) {
    console.log('Я NaN');
}

console.log('### 2. isFinite ###');
/*
преобразует аргумент в число и возвращает true,
если оно является обычным числом
*/
console.log(isFinite('25')); // "25" -> 25 -> true
console.log(isFinite('Привет!')); // "NaN" -> false
console.log(isFinite(10 / 0)); // infinity -> false



console.log('~~~ 6. Extract numb ~~~');

console.log('### 1. parseInt ###');
let valueOne = parseInt("150.58px");
console.log(valueOne);
console.log(typeof valueOne);

console.log('### 2.parseFloat ###');
let valueTwo = parseFloat("150.321423px");
console.log(valueTwo);
console.log(typeof valueTwo);



console.log('~~~ 7. Random ~~~');
// Возвращает рандомное число от 0 до 1
console.log(Math.random());



console.log('~~~ 8. Max ~~~');
// Возвращает максимальное число из перечисленных аргументов
console.log(Math.max(10, -20, 1));



console.log('~~~ 9. Min ~~~');
// Возвращает минимальное число из перечисленных аргументов
console.log(Math.min(10, 40, -222));



console.log('~~~ 10. Abs ~~~');
// Возвращает модуль числа
let numb = -58;
console.log(Math.abs(numb));



console.log('~~~ 11. pow ~~~');
//Math.pow(n, power)
//Возвращает число n, возведенное в степень power
console.log(Math.pow(5, 9));