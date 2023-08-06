function isPrime (n) {
    if (n < 2) return false;

    const hasNoDivisor = Array.from({length: n -2},
        (_,index) => (n %(index +2) !==0))
    
    const isPrime = hasNoDivisor.every(value => value)
    return isPrime
}

//Teste da função
console.log(isPrime(7))
console.log(isPrime(12))