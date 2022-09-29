1a. Yes, the InnerFunction() is a closure. It can access outerVariable.
1b.output is 100.



2.If we declare a variable with in a function or block then We can access this variable only inside that function. This is called scope.

eg:

 function exm()
{

 var a=10;

}
console.log(a);//error undefined
if we try to access this variable outside the function exm, then we get an error.


if we have two functions i.e outer and inner functions, then inner function can access the variables that are declared inside a outer function.This is closure.



3.leical scope is about scope of accessing variables. The inner function can access variables that are declared inside a outer function. This is lexical scope.

 If we call inner function outside the outer function i.e inside any third function, the variables of outer function can be accessed by inner function through lexical scope. This is closure.

4.

3
3
3




