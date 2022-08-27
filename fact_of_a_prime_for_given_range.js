// to find factorial of prime numbers from given range

let a,b,i,j,n,count=0;
function prime(a,b) {
 for(i=a;i<=b;i++)  {    //1 t0 100
count=0;
   for (j=1;j<=i;j++) {

       if(i%j==0)
          count++;

   }
if(count<=2)
  console.log(fact(i));
 }

}
 

 function fact(n) {
  if(n==0)
    return 1;
else
  return n*fact(n-1);
 }  
  
prime(3,100);