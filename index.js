//   wap to find the given no is even or odd
//  var i:
// function check(i){
//    if (i%2==0){
//         console.log("it is even no")
//     }
//    else{
//         console.log("it is odd no")
//     }
//  }
// check(8)
 
// to ckeck the given year is leap year or not
 var year;
 function checkLeap(year)
 {
     if((year%4==0)&&(year%100==!0) || (year%400==0))
     {
     console.log(" it is leap year")
     }
     else{
         console.log("it is not leap year")
     }
 }
 checkLeap(2000)