
// Write a JS script to print whether given triangle is equilateral,isoscles or scalane triangle.
let a,b,c;

function triangle(a,b,c)
 {
  if((a===b) && (b==c) && (c==a))
  
  console.log("given triangle is equilateral");

 else if((a==b) || (b==c) || (a==c))
   
   console.log("given triangle is a isolateral");

else 

  console.log("given triangle is a scalane");

 }

triangle(1,2,3);





     