// JavaScript code for Task 1
// Learning Objective 1: use of sub-algorithm (aka function) with zero parameters
// Learning Objective 2: use of Math.random()

function myFunction() {
  var p = document.getElementById("mydata");

  //call a sub-algorithm to return a random number in [0,2)
  var num = generateNum();

  if (num===0){
    p.innerHTML = "HEADS";
  } else {
    p.innerHTML = "TAILS";
  }

}

// a sub-algorithm to return a random number
// pre-conditions: none
// post-conditions: returns a random number in [0,2)
function generateNum() {
  return Math.floor(Math.random() * 2);
}

