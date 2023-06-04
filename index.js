const exchangeRate = 40;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * exchangeRate;
    console.log (`${dollars} dollars = ${uah} UAH`);
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }

    }
    return true;
}
{const numberToCheck = 3;
const isNumberPrime = isPrime(numberToCheck);
console.log(`Is ${numberToCheck} prime? ${isNumberPrime}`)};

function isPowerOfThree(number) {
    let result = 1;

    while (result < number) {
        result *= 3;
    }
    return result === number;

}
const numberToCheck = 27;
const canBePowerOfThree = isPowerOfThree(numberToCheck);
console.log(`Can ${numberToCheck} be obtained by raising 3 to a power? ${canBePowerOfThree} `);