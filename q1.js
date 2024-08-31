var arr=[3,5,2,6,7,9]



function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
  
    const sqrt = Math.sqrt(number);
    for (let i = 3; i <= sqrt; i += 2) {
      if (number % i === 0) return false;
    }
  
    return true;
  }


  var first=arr[0]
if (isPrime(first)){
    console.log("The number is prime")
}  
else{
    console.log("The number is not prime")
}