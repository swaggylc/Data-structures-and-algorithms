// 判断质数
function isPrime(number) {
    if (number == 1 || number == 2 || number == 3) return true
    // 因子只有一和它本身
    for (let i = 2; i <= (number / 2); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(3));
console.log(isPrime(9));
console.log(isPrime(34));
console.log(isPrime(54));
console.log(isPrime(31));
console.log(isPrime(37));
console.log(isPrime(79));