const fibonacci= function(number) {
   number= Math.abs(number);
    if(number <= 2) {
        return 1;
    } else {
        return fibonacci(number-1) + fibonacci(number-2);
    }
   

}
// const fib30 = fibonacci(30);
// const fibNeg15= fibonacci(-15);
console.log("Fibonacci of 30 is", fibonacci(30));
console.log("Fibonacci of -15 is", fibonacci(-15));
