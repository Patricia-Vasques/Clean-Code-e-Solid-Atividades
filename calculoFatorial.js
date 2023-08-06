function calculateFactorial (n) {
    if (n === 0){
        return 1;
    } else {
        return n * calculateFactorial(n-1)
    }
    
}

//Testandi a Função
console.log(calculateFactorial (5)); 
console.log(calculateFactorial (0)); 
console.log(calculateFactorial (10));