function p01Func() {
   document.getElementById("problem").innerHTML="<p>converts a decimal number to binary</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/binary/binary.jpg");
   
   document.getElementById("js").setAttribute("src", "images/binary/binary1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP01()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP01() {
   var num = prompt("num");

   var bin = '';
   var n = num;

   while (n != 0) {
       if (n % 2 == 0) {
           bin = '0' + bin;
       } else {
           bin = '1' + bin;
       }
       n = Math.floor(n / 2);
   }
   alert(num + ' in binary: ' + bin);
}

function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     document.getElementById("flowchart").style.display="inline";
  }
  else { 
	  document.getElementById("flowchart").style.display="none";
  }
}


function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
      document.getElementById("js").style.display="inline";
  }
  else {
      document.getElementById("js").style.display="none";
  }
}

function checkUncheck3(){
   if (document.getElementById("check3").checked==true) {
       document.getElementById("another").style.display="inline";
   }
   else {
       document.getElementById("another").style.display="none";
   }
 }

 function p02Func() {

   document.getElementById("problem").innerHTML="<p>Input numbers and return if they are positive or negative until a zero is entered.</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/pos/pos.jpg");
   
   document.getElementById("js").setAttribute("src", "images/pos/pos1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP02()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
   /* the following two lines gets the checkboxes that their ID is check1
      and check2, and unchecks them
   */
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
}
function runP02() {
   var num = prompt("num");
   while (num != 0){
       if (num>0){
           alert("positive");
       } else {
           alert("negative");
       }
       num = prompt("num");
   }
}

function p03Func() {

  document.getElementById("problem").innerHTML="<p>Im trying to create a program that randomly displays the result of a coin flip with an equal change of displaying HEADS or TAILS when a button is pressed.</p>";
 
  document.getElementById("flowchart").setAttribute("src","images/coin/coin.jpg");
  
  document.getElementById("js").setAttribute("src", "images/coin/coin1.jpg");
  document.getElementById("js").style.display = "none";

  document.getElementById("startbut").innerHTML = '<button onclick="runP03()">Run</button>';
 
  document.getElementById("another").setAttribute("src", "");
  document.getElementById("another").style.display = "none";   

 /* the following two lines gets the checkboxes that their ID is check1
    and check2, and unchecks them
 */
 document.getElementById("check1").checked=false;
 document.getElementById("check2").checked=false;

}
function runP03(){
   window.open('additionalFiles/p3-8/task1.html');
}

function p04Func() {

  document.getElementById("problem").innerHTML="<p>Im trying to display a random number between 1 and whichever button the user presses</p>";
 
  document.getElementById("flowchart").setAttribute("src","images/random/random.jpg");
  
  document.getElementById("js").setAttribute("src", "images/random/random1.jpg");
  document.getElementById("js").style.display = "none";

  document.getElementById("startbut").innerHTML = '<button onclick="runP04()">Run</button>';
 
  document.getElementById("another").setAttribute("src", "");
  document.getElementById("another").style.display = "none";   

 /* the following two lines gets the checkboxes that their ID is check1
    and check2, and unchecks them
 */
 document.getElementById("check1").checked=false;
 document.getElementById("check2").checked=false;
}
function runP04(){
   window.open('additionalFiles/p3-8/task2.html');
}
function p05Func() {

  document.getElementById("problem").innerHTML="<p>Im trying to display the sum of all the numbers leading up to whichever button the user presses</p>";
 
  document.getElementById("flowchart").setAttribute("src","images/sum/sum.jpg");
  
  document.getElementById("js").setAttribute("src", "images/sum/sum1.jpg");
  document.getElementById("js").style.display = "none";
  
  document.getElementById("startbut").innerHTML = '<button onclick="runP05()">Run</button>';
 
  document.getElementById("another").setAttribute("src", "");
  document.getElementById("another").style.display = "none";   

 /* the following two lines gets the checkboxes that their ID is check1
    and check2, and unchecks them
 */
 document.getElementById("check1").checked=false;
 document.getElementById("check2").checked=false;
}
function runP05(){
   window.open('additionalFiles/p3-8/task3.html');
}
function p06Func() {

  document.getElementById("problem").innerHTML="<p>Displays the results of 2 dice rolls and indicates wether the roll is doubbles via alert</p>";
 
  document.getElementById("flowchart").setAttribute("src","images/dice/dice.jpg");
  
  document.getElementById("js").setAttribute("src", "images/dice/dice1.jpg");
  document.getElementById("js").style.display = "none";
  
  document.getElementById("startbut").innerHTML = '<button onclick="runP06()">Run</button>';
 
  document.getElementById("another").setAttribute("src", "");
  document.getElementById("another").style.display = "none";   

 /* the following two lines gets the checkboxes that their ID is check1
    and check2, and unchecks them
 */
 document.getElementById("check1").checked=false;
 document.getElementById("check2").checked=false;
}
function runP06(){
   window.open('additionalFiles/p3-8/task4.html');
}
function p07Func() {

  document.getElementById("problem").innerHTML="<p>displays todays date and time when a button is clicked</p>";
 
  document.getElementById("flowchart").setAttribute("src","images/date/date.jpg");
  
  document.getElementById("js").setAttribute("src", "images/date/date1.jpg");
  document.getElementById("js").style.display = "none";
  
  document.getElementById("startbut").innerHTML = '<button onclick="runP07()">Run</button>';
 
  document.getElementById("another").setAttribute("src", "");
  document.getElementById("another").style.display = "none";   

 /* the following two lines gets the checkboxes that their ID is check1
    and check2, and unchecks them
 */
 document.getElementById("check1").checked=false;
 document.getElementById("check2").checked=false;
}
function runP07(){
   window.open('additionalFiles/p3-8/task5.html');
}
function p08Func() {

  document.getElementById("problem").innerHTML="<p>Lowers a countdown starting from 20 when the button is clicked until the button is clicked on zero when it displays the words BOOM!</p>";
 
  document.getElementById("flowchart").setAttribute("src","images/count/count.jpg");
  
  document.getElementById("js").setAttribute("src", "images/count/count1.jpg");
  document.getElementById("js").style.display = "none";

  document.getElementById("startbut").innerHTML = '<button onclick="runP08()">Run</button>';
 
  document.getElementById("another").setAttribute("src", "");
  document.getElementById("another").style.display = "none";   

 /* the following two lines gets the checkboxes that their ID is check1
    and check2, and unchecks them
 */
 document.getElementById("check1").checked=false;
 document.getElementById("check2").checked=false;
}
function runP08(){
   window.open('additionalFiles/p3-8/task6.html');
}
function p09Func() {

   document.getElementById("problem").innerHTML="<p>Calculates the perimeter of a rectangle based on 2 side lengths</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/perimeter/perimeter.jpg");
   
   document.getElementById("js").setAttribute("src", "images/perimeter/perimeter1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP09()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
}
function runP09(){
   window.open('additionalFiles/p9-13/ct_Ex1.html');
}
function p10Func() {

   document.getElementById("problem").innerHTML="<p>calculates the area of a paralelogram based on 2 sides and an angle</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/area/area.jpg");
   
   document.getElementById("js").setAttribute("src", "images/area/area1.jpg");
   document.getElementById("js").style.display = "none";
   
   document.getElementById("startbut").innerHTML = '<button onclick="runP10()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP10(){
   window.open('additionalFiles/p9-13/ct_Ex2.html');
}
function p11Func() {

   document.getElementById("problem").innerHTML="<p>finds the roots of 3 variables serving as cooficients in a wuadratic equation</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/roots/roots.jpg");
   
   document.getElementById("js").setAttribute("src", "images/roots/roots1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP11()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP11(){
   window.open('additionalFiles/p9-13/ct_Ex3.html');
}
function p12Func() {
   document.getElementById("problem").innerHTML="<p>finds the number of real roots ro if they exist in the first place given 3 cooficients</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/realroots/realroots.jpg");
   
   document.getElementById("js").setAttribute("src", "images/realroots/realroots1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP12()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP12(){
   window.open('additionalFiles/p9-13/ct_Ex4.html');
}
function p13Func() {
   document.getElementById("problem").innerHTML="<p>maps a number grade to a letter grade</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/grade/grade.jpg");
   
   document.getElementById("js").setAttribute("src", "images/grade/grade1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP13()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP13(){
   window.open('additionalFiles/p9-13/ct_Ex5.html');
}
function p14Func() {
   document.getElementById("problem").innerHTML="<p>breaks a number down into its digits</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/digits/digits.jpg");
   
   document.getElementById("js").setAttribute("src", "images/digits/digits1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP14()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP14(){
   window.open('additionalFiles/p14-20/ct_Ex9.html');
}
function p15Func() {
   document.getElementById("problem").innerHTML="<p>finds the number of 7s in a number</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/num7s/num7s.jpg");
   
   document.getElementById("js").setAttribute("src", "images/num7s/num7s1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP15()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP15(){
   window.open('additionalFiles/p14-20/ct_Ex10.html');
}
function p16Func() {
   document.getElementById("problem").innerHTML="<p>finds the sum of a numbers digits</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/numsum/numsum.jpg");
   
   document.getElementById("js").setAttribute("src", "images/numsum/numsum1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP16()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
}
function runP16(){
   window.open('additionalFiles/p14-20/ct_Ex11.html');
}
function p17Func() {
   document.getElementById("problem").innerHTML="<p>checks if a number is equal to its reverse</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/reverse/reverse.jpg");
   
   document.getElementById("js").setAttribute("src", "images/reverse/reverse1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP17()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP17(){
   window.open('additionalFiles/p14-20/ct_Ex12.html');
}
function p18Func() {
   document.getElementById("problem").innerHTML="<p>prints out a shell sort sequence up to the given term</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/sequence/sequence.jpg");
   
   document.getElementById("js").setAttribute("src", "images/sequence/sequence1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP18()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP18(){
   window.open('additionalFiles/p14-20/ct_Ex13.html');
}
function p19Func() {
   document.getElementById("problem").innerHTML="<p>outputs the fibonacci sequence up to a certain term</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/fibonacci/fibonacci.jpg");
   
   document.getElementById("js").setAttribute("src", "images/fibonacci/fibonacci1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP19()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
}
function runP19(){
   window.open('additionalFiles/p14-20/ct_Ex14.html');
}
function p20Func() {
   document.getElementById("problem").innerHTML="<p>outputs a pyramid of 'o's based on a  height specified</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/pyramid/pyramid.jpg");
   
   document.getElementById("js").setAttribute("src", "images/pyramid/pyramid1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP20()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP20(){
   window.open('additionalFiles/p14-20/ct_Ex15.html');
}
function p21Func() {
   document.getElementById("problem").innerHTML="<p>outputs wether a number is prime or not</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/prime/prime.jpg");
   
   document.getElementById("js").setAttribute("src", "images/prime/prime1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP21()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP21(){
   var num = parseInt(prompt("enter number"));

   var prime = true;
   var d = 2;

   while (prime && d <= num/2){
       if(num % d == 0){
           prime = false;
       }
       d=d+1;
   }
   if(prime == true){
       alert(num + " is prime");
   } else {
       alert(num + " is not prime");
   }
}
function p22Func() {
   document.getElementById("problem").innerHTML="<p>compares 2 sums</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/comparesums/comparesums.jpg");
   
   document.getElementById("js").setAttribute("src", "images/comparesums/comparesums1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP22()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP22(){
   var num;

   var sum1 = 0;
   var sum2 = 0;

   for(var i = 1; i<=4; i=i+1){
       num = parseInt(prompt("enter number"));
       sum1 = sum1 + num;
   }
   for (i = 1; i<=4; i=i+1){
       num = parseInt(prompt("enter number"));
       sum2 = sum2 + num;
   }

   if (sum1 == sum2){
       alert("yes");
   } else {
       alert("no");
   }
}
function p23Func() {
   document.getElementById("problem").innerHTML="<p>compares positive and negative numbers</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/posneg/posneg.jpg");
   
   document.getElementById("js").setAttribute("src", "images/posneg/posneg1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP23()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP23(){
   var num;
   var p = 0;
   var n = 0;
   do{
       num = parseInt(prompt("enter number"));
       if(num>0){
           p = p + 1;
       } else if (num<0){
           n = n + 1;
       }
   } while (num != 0 && p <= 2*n);
}
function p24Func() {
   document.getElementById("problem").innerHTML="<p>compares 2 counts</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/countssum/countssum.jpg");
   
   document.getElementById("js").setAttribute("src", "images/countssum/countssum1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP24()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP24(){
   var num;
   var cnt1 = 0;
   var cnt2 = 0;

   for (var i = 1; i<=4; i = i + 1){
       num = parseInt(prompt("enter number"));
       if(num<0){
           cnt1 = cnt1 + 1;
       }
   }
   for (i = 1; i<=4; i = i +1){
       num = parseInt(prompt("enter number"));
       if(num>0){
           cnt2 = cnt2 + 1;
       }
   }
   if(cnt1 == cnt2){
       alert("yes");
   } else {
       alert("no");
   }
}
function p25Func() {
   document.getElementById("problem").innerHTML="<p>checks if a number is prime using 2 functions</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/flag/flag.jpg");
   
   document.getElementById("js").setAttribute("src", "images/flag/flag1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP25()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP25(){
   var num = parseInt(prompt("enter number"));
   for (var i = 2; i<=num; i = i + 1){
       if(prime(i) == true){
           alert(i);
       }
   }
}
function prime(num){
   var flag = true;
   var d = 2;
   while(flag && d<= num/2){
       if(num%d == 0){
           flag = false;
       }
       d = d+1;
   }
   return flag;
}
function p26Func() {
   document.getElementById("problem").innerHTML="<p>checks if a number is prime and has a seven using 3 functions</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/primeseven/primeseven.jpg");
   
   document.getElementById("js").setAttribute("src", "images/primeseven/primeseven1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP26()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP26(){
   var num = parseInt(prompt("enter number"));
   for (var i = 2; i<=num; i = i + 1){
       if(prime(i) && has7(i)){
           alert(i);
       }
   }
}
function has7(num) {
   var flag = false;
   while (num > 0) {
       if (num % 10 === 7) {
           flag = true;
           break;
       }
       num = (num - (num % 10)) / 10;
   }
   return flag;
}
function p27Func() {
   document.getElementById("problem").innerHTML="<p>adds the sum of the numbers from 10 to 13 inclusively</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/sumthirteen/sumthirteen.jpg");
   
   document.getElementById("js").setAttribute("src", "images/sumthirteen/sumthirteen1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP27()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP27(){
   var a = 10;
   var sum = 0;
   do{
       sum = sum +a;
       a= a+1;
   } while (a<14)
   alert("10 + 11 + 12 + 13 = " + sum)
}
function p28Func() {
   document.getElementById("problem").innerHTML="<p>orders 3 given numbers from greatest to smallest</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/order/order.jpg");
   
   document.getElementById("js").setAttribute("src", "images/order/order1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP28()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP28(){
   var a = prompt("a");
   var b = prompt("b");
   var c = prompt("c");
   if (a>b){
       if (b>c){
           alert(a +", "+ b +", "+ c);
       }
       else if (a>c){
           alert(a +", "+ c +", "+ b);
       }
       else{
           alert(c +", "+ a +", "+ b);
       }
   }
   else if (a>c){
       alert(b +", "+ a +", "+ c);
   } 
   else if (b>c) {
       alert(b +", "+ c +", "+ a);
   }
   else {
       alert(c +", "+ b +", "+ a);
   }
}
function p29Func() {
   document.getElementById("problem").innerHTML="<p>computes the factorial of a number in one short function</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/numfac/numfac.jpg");
   
   document.getElementById("js").setAttribute("src", "images/numfac/numfac1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP29()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP29(){
   var num = prompt("num");
   var f = 1;

   for (var i = 1 ; i<=num ; i++){
       f=f*i;
   }
   alert(num + "!=" + f);
}
function p30Func() {
   document.getElementById("problem").innerHTML="<p> checks if a number is a power of 2</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/powertwo/powertwo.jpg");
   
   document.getElementById("js").setAttribute("src", "images/powertwo/powertwo1.jpg");
   document.getElementById("js").style.display = "none";
  
   document.getElementById("startbut").innerHTML = '<button onclick="runP30()">Run</button>';

   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP30(){
   var num = prompt("num");

   do{
       num = num/2;
   } while (num>1);

   if (num == 1){
       alert("yes");
   } else {
       alert("no");
   }
}
function p31Func() {
   document.getElementById("problem").innerHTML="<p>generates a multiplication table up to a selected size</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/multtable/multtable.jpg");
   
   document.getElementById("js").setAttribute("src", "images/multtable/multtable1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP31()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP31(){
   //this function i made up it wasnt in the lecture slides
   var size = prompt("Enter the size of the multiplication table:");

   var table = "";
   for (var i = 1; i <= size; i++) {
      for (var j = 1; j <= size; j++) {
         table += i * j + "_|_";
      }
      table += "\n";
   }
   alert("Multiplication Table:\n\n" + table);
}
function p32Func() {
   document.getElementById("problem").innerHTML="<p>finds the prime numbers in a selected range of numbers</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/primerange/primerange.jpg");
   
   document.getElementById("js").setAttribute("src", "images/primerange/primerange1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP32()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
} 
function runP32(){
   // this code is based on this guys desired outcome and code (2nd reply to the post)
   // https://stackoverflow.com/questions/4831724/fast-prime-numbers-between-range
   // i derived the flowchart from the code

   var startRange = prompt("Enter the starting number of the range:");
   var endRange = prompt("Enter the ending number of the range:");

   var primeNumbers = "Prime numbers between " + startRange + " and " + endRange + ": ";
   for (var num = parseInt(startRange); num <= parseInt(endRange); num++) {
      var isPrime = true;
      for (var i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) {
            isPrime = false; 
            break;
         }
      }
      if (isPrime && num > 1) {
         primeNumbers += num + " ";
      }
   }
   alert(primeNumbers);
}
function p33Func() {
   document.getElementById("problem").innerHTML="<p>displays a growing number pyramid pattern until a specified number of rows</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/numpat/numpat.jpg");
   
   document.getElementById("js").setAttribute("src", "images/numpat/numpat1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP33()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
   /* the following two lines gets the checkboxes that their ID is check1
      and check2, and unchecks them
   */
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
} 
function runP33(){
   //this function i just made up
   var numberRows = prompt("Enter the number of rows for the number pattern:");
   var numberPattern = "";
   for (var i = 1; i <= numberRows; i++) {
      for (var j = 1; j <= i; j++) {
         numberPattern += j + " ";
      }
      numberPattern += "\n";
   }
   alert("Number Pattern:\n\n" + numberPattern);
}
function p34Func() {
   document.getElementById("problem").innerHTML="<p>displays a randomly generated pattern of stars on a specified convas size</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/stars/stars.jpg");
   
   document.getElementById("js").setAttribute("src", "images/stars/stars1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP34()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
   /* the following two lines gets the checkboxes that their ID is check1
      and check2, and unchecks them
   */
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
} 
function runP34(){
   //this function i just made up
   var canvasSize = prompt("Enter the size of the canvas:");

   var canvas = "";
   for (var i = 1; i <= canvasSize; i++) {
      for (var j = 1; j <= canvasSize; j++) {
         // Randomly decide if a star is present (1 in 5 chance)
         canvas += Math.floor(Math.random() * 5) === 1 ? "* " : "  ";
      }
      canvas += "\n";
   }
   alert(canvas);
}
function p34Func() {
   document.getElementById("problem").innerHTML="<p>displays a randomly generated pattern of stars on a specified convas size</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/stars/stars.jpg");
   
   document.getElementById("js").setAttribute("src", "images/stars/stars1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP34()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
   /* the following two lines gets the checkboxes that their ID is check1
      and check2, and unchecks them
   */
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
} 
function runP34(){
   //this function i just made up
   var canvasSize = prompt("Enter the size of the canvas:");

   var canvas = "";
   for (var i = 1; i <= canvasSize; i++) {
      for (var j = 1; j <= canvasSize; j++) {
         // Randomly decide if a star is present (1 in 5 chance)
         canvas += Math.floor(Math.random() * 5) === 1 ? "* " : "  ";
      }
      canvas += "\n";
   }
   alert(canvas);
}
function p35Func() {
   document.getElementById("problem").innerHTML="<p>displays a diamond pattern (of a specified size) made of little diamonds</p>";
  
   document.getElementById("flowchart").setAttribute("src","images/diamond/diamond.jpg");
   
   document.getElementById("js").setAttribute("src", "images/diamond/diamond1.jpg");
   document.getElementById("js").style.display = "none";

   document.getElementById("startbut").innerHTML = '<button onclick="runP35()">Run</button>';
  
   document.getElementById("another").setAttribute("src", "");
   document.getElementById("another").style.display = "none";   
 
   /* the following two lines gets the checkboxes that their ID is check1
      and check2, and unchecks them
   */
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
} 
function runP35(){
  //this one is also made up 
   var diamondSize = prompt("Enter the size (radius) of the diamond pattern:");

   var diamond = "";
   for (var i = 1; i <= diamondSize; i++) {
      for (var j = 1; j <= diamondSize - i; j++) {
         diamond += "   ";
      }
      for (var k = 1; k <= 2 * i - 1; k++) {
         diamond += "◇";
      }
      diamond += "\n";
   }
   for (var i = diamondSize - 1; i >= 1; i--) { 
      for (var j = 1; j <= diamondSize - i; j++) {
         diamond += "   ";
      }
      for (var k = 1; k <= 2 * i - 1; k++) {
         diamond += "◇";
      }
      diamond += "\n";
   }
   alert(diamond);
}
function zoomIn(){
  document.getElementById("flowchart").style.width="200%";
}
function zoomOut(){
  document.getElementById("flowchart").style.width="100%";
}