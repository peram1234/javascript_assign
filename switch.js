//js program to find grade of a student using switch case and function

let marks;
function grade(marks)
 {
 switch(true) {

 case (marks>=90 && marks<=100):
 console.log("S grade");;
 break;
 
 case (marks>=80 && marks<=90):
 console.log("A grade");
 break;

 case (marks>=70 && marks<=80):
 console.log("B grade");
 break;

 case (marks>=60 && marks<=70):
 console.log("C grade");
 break;

 case (marks>=50 && marks<=60):
console.log("D grade");
 break;

 case (marks>=40 && marks<=50):
console.log("E grade");
 break;

 case (marks>=0 && marks<=40):
console.log("student has failed");
break;

default:
console.log("invalid marks");


  }
}
console.log(grade(80));


 


 