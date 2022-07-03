// //Revers a number without turning the number into a string or using built-in methods.

// let number = 54837;
// i = 1;
// let newNumber = 0;
// while (number > 0) {
//   reminder = (number % 10) * Math.pow(10, 5 - i);
//   number = parseInt(number / 10);
//   newNumber += reminder;
//   i++;
// }

// //Find all unique characters in a string .

// let variable1 = "ahmad zaid";
// for (let i = 0; i < variable1.length; i++) {
//   counter = 0;
//   for (let j = 0; j < variable1.length; j++) {
//     if (variable1[i] == variable1[j] && variable1[i] != " ") {
//       counter++;
//     }
//   }
//   if (counter == 1) {
//     console.log(`${variable1[i]} is a unique letter`);
//   }
// }

// Get all prim numbers between 1-100

// for (let i = 2; i < 100; i++) {
//   counter = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       counter++;
//     }
//   }
//   if (counter == 2) {
//     console.log(`${i} is a prime Number`)
//   }
// }

// let Number1 = 371;
// Number2 = Number1;
// cubeSum = 0;
// while (Number2 > 0) {
//   reminder = Number2 % 10;
//   Number2 = parseInt(Number2 / 10);
//   cubeSum += reminder * reminder * reminder;
// }
// if (cubeSum == Number1) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// input = [2, 2, 2, 7, 3, 3, 1, 2];
// sum = 0;
// for (let i = 0; i < input.length; i++) {
//   counter = 0;
//   for (let j = i; j < input.length; j++) {
//     if (input[i] + input[j] == input[i] * 2) {
//       counter++;
//     }
//   }
//   console.log(`${counter * input[i]}`);
// }

// array = [0, 5, 4, 9, 3];
// min = array[0];
// max = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
//   if (array[i] < min) {
//     min = array[i];
//   }
// }
// for (let i = min; i <= max; i++) {
//   flag = true;
//   for (let j = 0; j < array.length; j++) {
//     if (i == array[j]) {
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     console.log(`${i} is missing Number`);
//   }
// }

input = "I am lost";
splitted_word = input.split(" ").reverse().join(" ");
console.log(splitted_word);
// output = "";
