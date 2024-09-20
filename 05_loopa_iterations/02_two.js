//while

//while Loop: Checks the condition before running the loop. If the condition is false initially, it may not run at all.
let i = 0;
while (i <= 5) { //termination condition
   console.log(`value of index is ${i}`);
   //i++
   i = i + 2 // Update Statement (i = i + 2): Modifies the loop variable so that the loop condition eventually becomes false.
    
}



// do while
//let score = 11  //false condition still executes once
let score = 1
do {
   console.log(`Score is ${score}`);
   score++
} while (score <=10);


//do while Loop:
// Runs the loop at least once before checking the condition. It will always execute the loop code at least once, even if the condition is false right from the start.