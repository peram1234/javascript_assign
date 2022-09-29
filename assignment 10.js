1.Higher order functions and call backs both are different.

Higher order function: The function which takes another funtion as an parameter and /or returns a function as an value;
call back function:The function which is called inside another function as an argument.


2. Yes, filter is an higher order function as it accepts another function as an paremeter.Based on the call back function it creates an array and values are stored in it.


3.


let var1=(num)=>return num*2;
let funt1=var1(2);

funct2(a,b)
{ 
 return a+b;
}

funct2(funct1,4);


Funct2 is an higher order function as it takes another function as an parameter.
funct1 is an call back funtion as it taken as an argument to funct2 and it is triggered only when funct2 is called.


4.

The output is below
Hello John
Hello Tina
Hello Kale
Hello Max


Here useFunction is an higher order function as it takes argFn() function as an parameter.

