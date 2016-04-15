// Exercise 1: Looping a triangle
var triangle = "";
for (i=1; i<=7; i++) {
    triangle += "#";
  console.log(triangle);
}

// Exercise 2: FizzBuzz 

for (i=1; i <=100; i++){
 if (i%3 == 0 && i%5 == 0) {
  console.log("FizzBuzz");
 } else if (i%3 == 0) {
   console.log("Fizz");
 } else if (i%5 == 0) {
   console.log("Buzz");
 } else {
  console.log(i);
  }
 }

// Exercise 3: Chess Board 
var size = 8;
var board = "";
for (var i=0; i < size; i++) {
  for (var o=0; o<size; o++) {
      if ((i+o)%2===0) {
          board +=" ";
        }
        else{
          board +="#";
        }
    }
    board +="\n";
}
  console.log(board);