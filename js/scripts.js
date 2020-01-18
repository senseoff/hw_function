(function() {
    "use strict";

    let primeNum = [],
        notPrimeNum = [];

    let firstNum = +prompt('Введите первое число интервала:'),
        secondNum = +prompt('Введите второе число интервала:');

    let minNum = null,
        maxNum = null;

    if (firstNum < secondNum) {
        minNum = firstNum;
        maxNum = secondNum;
    } else {
        minNum = secondNum;
        maxNum = firstNum;
    }

    for (let i = minNum; i < maxNum; i++) {
        for (let a = 2; a < maxNum; a++) {
            if (i == a) {
                primeNum.push(i);
                break;
            } else if (i % a == 0) {
                notPrimeNum.push(i);
                break;
            }
        }
    }

    alert(`Простые числа: ${primeNum}`);
    alert(`Составные числа: ${notPrimeNum}`);

    }());