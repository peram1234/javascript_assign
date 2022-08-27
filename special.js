let num = 145;
let temp,sum=0,rem;
temp=num;
function fact(n)
 {
if (n==0 || n==1)
  return n;
else 
  return n*fact(n-1);

}

 while(temp>0)
 {
rem=temp%10;
sum=sum+fact(rem);
temp=parseInt(temp/10);
 }

if(sum==num)

 console.log("special num");

else
 
 console.log("not a special num");










 

