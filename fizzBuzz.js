/*
 Fizz-buzz algorithm
 Input: An array of numbers
 Task iterate through the array of numbers output the following:

 All numbers divisible by 3 & 5 Print fizz-buzz
 All numbers divisible by 3 print fizz
 All numbers divisible by 5 print buzz
 Steps:
 Iterate through the array
     Test if current number div by 3
        If so Print fizz
     Test if current number  div by 5
        if so print Buzz
      Test if current num div by 3 & 5
         if so fizz buzz
     Increment

Using modulo.
The '%' Modulo symbol returns the remainder of the division of two numbers.
8 % 3 = 2
* divided
 */
let i;
for (i=1; i < 20; i++){
    if(i % 3 === 0 && i % 5 === 0){ // The key to fizz buzz is catching the double at the top
        console.log('FizzBuzz');}
    else if (i % 3 === 0){
        console.log('Fizz')}
        else if (i % 5 === 0){
            console.log('Buzz');
        }
        else console.log(i);
    }

