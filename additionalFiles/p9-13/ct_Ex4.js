// in Ex2 to Ex5, change the name of the following function properly
function equation() {

  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  /* in Ex2 to Ex4, you need to replace the following line 
    with some other formulas */
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  var disc = b**2 - 4*a*c;
  var amtRoots

  if(disc<0){
    amtRoots = "it has no roots in real numbers";

  } else if(disc===0){
    amtRoots = "its roots are identical";

  } else if (disc>0){
    amtRoots = "it has 2 distinct roots";

  } else {
    amtRoots = "Error";

  }
  


  /* in Ex5, you should delete from Line 9 to this line */

  /*   //in Ex 5, uncomment this block
  switch (true){
	case (a > 89): 
		answer = "A+";
		break;
	case (a > 79): 
		answer = "A";
		break;
		// in Ex5, you need to add more cases for other letter grades
	default:
		answer = "F";
  }
  */
  
  /* in Ex2 to Ex5, you need to rename "perimeter" to make it appropriate
     for those problems, you may also need to rename perimeter to a better 
	 variable that you might have in your formulas above */ 
  document.getElementById("output").innerHTML = amtRoots; 

}
