function fizzBuzz(n){
  for(let num = 1; num <= n; num++){
    if(num % 15 === 0){ console.log('FizzBuzz')}
    else if(num % 3 === 0){ console.log('Fizz')}
    else if(num % 5 === 0){ console.log('Buzz')}
    else { console.log(num)}
  }
}
console.log(fizzBuzz(40))
