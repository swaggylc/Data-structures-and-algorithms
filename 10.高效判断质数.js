function isPrime(number) {
    let temp = parseInt(Math.sqrt(number))
    for (let i = 2; i < temp; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

// 测试
console.log(isPrime(3));
console.log(isPrime(45));
console.log(isPrime(31));
console.log(isPrime(99));
console.log(isPrime(59));