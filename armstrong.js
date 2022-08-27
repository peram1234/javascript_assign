//program to find given num is a armstrong num or not.
let k,n=153,sum=0;
k=parseInt(n/10);
let l=n%10;
let m=parseInt(n/100);
sum=sum+((l*l*l)+(m*m*m)+
((k%10)*(k%10)*(k%10)));
console.log(sum);
if(sum==n)
 {
console.log("given num is a armstrong num");
}
else
{
console.log("given num is not a armstrong num");
}


//using while loop

let num,temp,rem,sum=0;
let n=153,rem,temp,sum=0;
temp=n;
while(temp>0)
 {
rem=temp%10;
sum=sum+(rem*rem*rem);
temp=parseInt(temp/10);
 }
if(sum==n)
 {
  console.log("given num is a armstron");
 }
else
{
 console.log("given num is not a armstron num");
}



 