const arr = [12, -34, 19, 89, -3, 45, -22]

let sum1 = 0
let sum2 = 0

for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // Четное число
      sum1 = sum1 + arr[i];

    } else {
        // Нечетное число
        sum2 = sum2 + arr[i];
    }
}

const result = (sum1 - sum2 )

console.log("Сумма четных чисел:"  , sum1);
console.log("Сумма нечетных чисел:", sum2);
console.log("Разница между суммами:", result);