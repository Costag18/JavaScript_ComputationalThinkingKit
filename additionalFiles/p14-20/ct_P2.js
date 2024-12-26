// in Ex9 to Ex15, change the name of the following function properly
function problem_09() {
  
   /* this statement defines an object reference to the 
      html element having an ID "output".
     Every time you want to output something, use outputObj */
   var outputObj = document.getElementById("output");
 
   // this statement receives some data and parses it to integer
   var a = parseInt(prompt("Please enter a number: ", ""));
  
  
   /* this statement add some message to our output Object
      you would need to change the message to be appropriate in Ex10 to E15*/
   outputObj.innerHTML = "number: " + a + "<br><br>its digits: ";
 
   // translate the rest of your flowcharts to js here:
   
    while (a > 0) {
       outputObj.innerHTML = outputObj.innerHTML + (a % 10) + ", ";
       a = (a - (a %10)) / 10;
    }
   
   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }
 
 function problem_10() {

   var outputObj = document.getElementById("output");

   var a = parseInt(prompt("Please enter a number: ", ""));
  
   outputObj.innerHTML = "number: " + a + "<br><br>number of 7's: ";
 
   // translate the rest of your flowcharts to js here:
   
   var counter = 0;

   while (a > 0) {
      if (a % 10 == 7) {
         counter = counter + 1;
      }
       a = (a - (a %10)) / 10;
    }

    outputObj.innerHTML = outputObj.innerHTML + counter ; 
   
   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }

 function problem_11() {

   var outputObj = document.getElementById("output");

   var a = parseInt(prompt("Please enter a number: ", ""));
  
   outputObj.innerHTML = "number: " + a + "<br><br>sum of digits: ";
 
   // translate the rest of your flowcharts to js here:
   
   var sum = 0;

   while (a > 0) {
      sum = sum + (a % 10);
       a = (a - (a %10)) / 10;
    }

    outputObj.innerHTML = outputObj.innerHTML + sum ; 
   
   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }

 function problem_12() {

   var outputObj = document.getElementById("output");

   var a = parseInt(prompt("Please enter a number: ", ""));
  
   outputObj.innerHTML = "number: " + a + "<br><br>equal to its reverse? ";
 
   // translate the rest of your flowcharts to js here:
   
   var reverse = 0;
   var temp = a;

   while (a > 0) {
      reverse = 10 * reverse + (a % 10);
      a = (a - (a %10)) / 10;
   }

   if (temp == reverse) {
      outputObj.innerHTML = outputObj.innerHTML + "yes" ; 
   } else {
      outputObj.innerHTML = outputObj.innerHTML + "no" ;
   }

   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }

 function problem_13() {

   var outputObj = document.getElementById("output");

   var a = parseInt(prompt("Please enter a number: ", ""));
  
   outputObj.innerHTML = "n: " + a + "<br><br> Sequence: ";
 
   // translate the rest of your flowcharts to js here:

   for(var i = 1; i<=a; i++) {
      outputObj.innerHTML = outputObj.innerHTML + (3**i - 1)/2 + ", " ;
   }

   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }

function fibonacci() {

   var outputObj = document.getElementById("output");

   var a = parseInt(prompt("Please enter a number: ", ""));
  
   outputObj.innerHTML = "number: " + a + "<br><br> Fibonacci: ";
 
   // translate the rest of your flowcharts to js here:

   var secondLast = 0;
   var last = 1;
   var newValue;

   outputObj.innerHTML = outputObj.innerHTML + secondLast + ", " + last;

   for(var i = 2; i<a; i++) {
      newValue = secondLast + last;
      secondLast = last
      last = newValue
      outputObj.innerHTML = outputObj.innerHTML + ", " + newValue;
   }

   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }

 function problem_15() {

   var outputObj = document.getElementById("output");

   var a = parseInt(prompt("Please enter a number: ", ""));
  
   outputObj.innerHTML = "number: " + a + "<br>" ;
 
   // translate the rest of your flowcharts to js here:
   outputObj.style.fontSize = "20px";
   for(var i = 1; i<=a; i++) {
      for(var j = a; j>=i; j--){
         outputObj.innerHTML = outputObj.innerHTML + "oo";
      }
      for(var k = 0; k<i-1; k++){
         outputObj.innerHTML = outputObj.innerHTML + "&nbsp&nbsp";
      }
      outputObj.innerHTML = outputObj.innerHTML + "<br>"
   }

   //the following statements inform the user that the program ended
   //and disable the button
   outputObj.innerHTML = outputObj.innerHTML + "<br><br>" + "program ended";
   document.getElementsByTagName("button")[0].setAttribute("disabled","true");
 }