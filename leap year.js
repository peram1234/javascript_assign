// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//program to find given year is a leap year or not.


let year=2200;
let c;
if(year%4!=0)
 { 
   console.log("given year is not a leap year");
 }
else if(year%4==0 && year%100!=0)
     {
       console.log("given year is a leap year");
     }
else(year%4==0 && year%100==0)
     {
        c=year%400;
          if (c==0)
             console.log("given year is a leap year");
          else
             console.log("given year is not a leap year");
     
       
      }

            
       




   


    
