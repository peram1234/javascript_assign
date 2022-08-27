
let n=4;

let row,col,count =1;
let string="";
for(row=1;row<=n;row++)
  {
  for(col=1;col<=row;col++)
   {
    string+=count;
    count++;
   }
string+='\n';
 }
 console.log(string);
 
 