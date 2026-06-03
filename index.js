// 1. Գրել ֆունկցիա որը ամեն վարկյանը մեկ կհաշվի թե
// ձեր համակարգչի ում ինչքան ազատ տեղ կա

// const os = require("os")

// setInterval(() => {
//     console.log(os.freemem());
// }, 1000);

// 2. log all divisors of natural number

// function allDivisors(number) {
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       console.log(i);
//     }
//   }
// }

// allDivisors(21);

// 3. log all divisors total value

// function valueOfAllDivisorsTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//         total += i
//     }
//   }
//   console.log(total);
// }

// 4. valueOfAllDivisorsTotal(21);

//  log all divisors total value / quantity value

// function valueOfAllDivisorsAverage(number) {
//   let total = 0;
//   let quantity = 0
//   for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//         total += i
//         quantity++
//     }
//   }
//   console.log(total/quantity);
// }

// valueOfAllDivisorsAverage(21);

// 5. all prime divisors total quantity

// function quantityOfPrimeNumbers(number) {
//   let quantity = 0;
//   for (let i = 1; i <= number; i++) {
//     let isPrimeQuantity = 0
//     for (let j = i; j >= 1; j--) {
//       if (i % j === 0 && number % i === 0) {
//         isPrimeQuantity++
//       }
//     }
//     if (isPrimeQuantity===2) {
//         quantity++
//     }
//   }
//   console.log(quantity);
// }

// quantityOfPrimeNumbers(21);

//  6. introduction to prime multiplication multiply type

// function primeMultiIntro(n) {
//   let primeNums = [];

//   for (let i = 2; i <= n; i++) {
//     while (n % i === 0) {
//       primeNums.push(i);
//       n /= i;
//     }
//   }

//   console.log(primeNums.join(" * "));
// }

// primeMultiIntro(10);

// 7. log n>0 Z number's  the biggest exponentiation of 2 which is not bigger then n

// function biggestExponentiation(n) {
//   if (n <= 0) {
//     console.log(`Your number ${n} is not bigger then 0`);
//     return;
//   }

//   if (n === 1) {
//     console.log(0);
//     return;
//   }

//   let num = 2;
//   let up = 2;
//   let exponentiationCount = 1;

//   while (num * up <= n && num <= n) {
//     num *= up;
//     exponentiationCount++;
//   }

//   console.log(exponentiationCount);
// }

// biggestExponentiation(2);

// 8 log n>0 Z number's  the smallest exponentiation of 2 which is bigger then n

// function smallestExponentiation(n) {
//   if (n <= 0) {
//     console.log(`Your number ${n} is not bigger then 0`);
//     return;
//   }

//   if (n === 1) {
//     console.log(2);
//     return;
//   }

//   let num = 2;
//   let up = 2;
//   let exponentiationCount = 1;

//   while (num <= n) {
//     num *= up;
//     exponentiationCount++;
//   }

//   console.log(exponentiationCount);
// }

// smallestExponentiation(1023);
