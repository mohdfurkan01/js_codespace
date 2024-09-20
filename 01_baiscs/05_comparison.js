console.log(3>1);  //true
console.log(3>=1); //true
console.log(3<1);  //false
console.log(3==1); //false
console.log(3!=1); //true


console.log("3" > 1); //true
console.log("02" > 1); //true

//Avoid these type of comparison
console.log(null > 0); //FALSE! It’s like, "Is 0 greater than 0?" The answer is obviously no.
console.log(null == 0); //FALSE! It’s like, "Is 0 greater than or equal to 0?" Now, the answer is yes, because 0 is equal to 0.
console.log(null >= 0); //TRUE! This is where things get a bit tricky! When you check equality using ==, it doesn’t automatically treat null as 0. Instead, null is only equal to undefined and nothing else


//Comparisons (> < >= <=): When comparing, null acts like it’s the number 0.

//Equality (==): When checking equality, null stays as it is and only matches with undefined.

//The reason is that, null >= 0 is true because null pretends to be 0. But null > 0 is false because 0 is not greater than itself. And null == 0 is false because null doesn’t try to be something it’s not.

//Avoid these type of comparison
console.log(undefined >0); //FALSE
console.log(undefined <0); //FALSE
console.log(undefined == 0); //FALSE

//1. undefined > 0 (false)
//When you compare undefined with 0 using >, JavaScript can’t really convert undefined into a number that makes sense, so it just says, "This comparison doesn’t work," and returns false.

//2. undefined < 0 (false)
//The same thing happens when you try to check if undefined is less than 0. JavaScript doesn’t know how to handle it, so it returns false again.

//3. undefined == 0 (false)
//For equality checks with ==, undefined is only equal to null and not to any number. So, when you check if undefined is equal to 0, JavaScript says, "Nope, undefined isn’t the same as 0," and returns false.

// === strict equality operator 
console.log("3" === 3); //FALSE bcoz  it checks both the value and the type

//Value Check: It looks at the values, which are both 3.
//Type Check: It then checks the types. "3" is a string, and 3 is a number.
//Since the types are different (one is a string and the other is a number), the result is false.

//In simple terms: === is like a very picky person who needs both the value and the type to match perfectly before saying "yes."

//In simple words: === is like someone who only agrees if both the value and the type are exactly the same.
