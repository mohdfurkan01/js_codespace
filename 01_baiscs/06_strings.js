const name = "Ahsan";
const gfgScore = 80;

//console.log(name + gfgScore + "anyValue");

console.log(`Hey there this side ${name} and my score is: ${gfgScore}`); //modern way and good readability

const pubgGame = new String("Pat_se_headshot");

// console.log(pubgGame[0]);
// console.log(pubgGame.__proto__);
// console.log(pubgGame.length);
// console.log(pubgGame.toUpperCase());
console.log(pubgGame.charAt(2)); // t
console.log(pubgGame.at(2)); //t
console.log(pubgGame.indexOf('t')); // 2

const anotherStr = pubgGame.substring(0,5); //P=0 a=1 t=2  _=3 s=4   5 is excluding 
console.log(anotherStr); //not support negative index

const forSliceStr = pubgGame.slice(-10,5)  
console.log(forSliceStr);

const str3 = "   ahsan   ";
console.log(str3); // __ahsan__   __space
console.log(str3.trim()); //ahsan  || to remove space from input field or dont want to save in db



//at() aur charAt() dono methods strings ke characters ko access karne ke liye use hote hain

//1. charAt() Method:
//Syntax: string.charAt(index)
//Description: The charAt() method returns the character at a specific position in a string
//Index Range: If you use a negative number, out-of-bounds index or a number that's bigger than the length of the string, it will return an empty string.


let str = "Hello";
console.log(str.charAt(1)); // Output: "e"
console.log(str.charAt(-1)); // Output: ""
console.log(str.charAt(10)); // Output: ""


//2. at() Method:
//Syntax: string.at(index)
//Description: The at() method also returns the character at a specific position in a string, 
//but it has a special feature—it can handle negative numbers.
//Index Range: This means you can count from the end of the string using negative numbers
let str2 = "Hello";
console.log(str2.at(1)); // Output: "e"
console.log(str2.at(-1)); // Output: "o"  (Last character)
console.log(str2.at(-2)); // Output: "l"
console.log(str2.at(10)); // Output: undefined (Out of bounds)

//Key Differences:
//Negative Indexes: charAt() doesn't support negative indexes, while at() does.
//Out-of-Bounds Index: charAt() returns an empty string if you go beyond the string's length, but at() returns undefined.
//Return Value: charAt() always returns a string, even if it's empty. at() can return undefined if the index is out of range.

//In Summary: If you need to count characters from the end of the string or want more flexibility with errors, use at(). If you just want to get a character at a specific position without any extra features, charAt() works just fine.

//Reverse string using at method by accessing negative index
let myStr = "Hello";
let reversedStr = "";

for (let i = 1; i <= myStr.length; i++) {
    //reversedStr = reversedStr = myStr.at(-i);
    reversedStr += myStr.at(-i);
}
console.log(reversedStr); // Output: "olleH"


const myURL = "https://something.com/ahsan%20raza"
console.log(myURL.replace('%20', '-'));

console.log(myURL.includes('ahsan')); //true
console.log(myURL.includes('uganda')); //flase

// The split method in JavaScript is used to divide a string into an array of substrings based on a specified delimiter.
//Case 1: Splitting by Space
const str4 = 'The quick brown fox jumps over the lazy dog.';
const words = str4.split(' '); // Split the string into an array of words
//console.log(words); //output ['The', 'quick', 'brown', 'fox', 'jumps'.....something like that]
console.log(words[3]); // Access the 4th word (index 3)

//str.split(' '): Here, the space ' ' is used as the delimiter. This means the string is split wherever there is a space.

//Resulting Array: The resulting array will be: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'].
//words[3]: Accessing index 3 in this array gives "fox", which is the 4th word.

//Case 2: Splitting by Empty String
const str5 = 'The quick brown fox jumps over the lazy dog.';
const chars = str5.split(''); // Split the string into an array of characters
//console.log(chars); //output ['T', 'h', 'e', ' ', 'q', 'u',....something like that]
console.log(chars[8]); // Access the 9th character (index 8)

//str.split(''): Here, the empty string '' is used as the delimiter. This means the string str into an array where each element is a single character
//Resulting Array: The resulting array will be: ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', ...].
//chars[8]: Accessing index 8 in this array gives "k", which is the 9th character

//split(' ') uses a space as the delimiter, resulting in an array of words.
//split('') uses an empty string as the delimiter, resulting in an array of individual characters.


//str.split(' '):
//* What it does: Splits the string wherever there is a space.
//* Result: You get an array where each word is a separate item.
//* Example: 'The quick brown fox'.split(' ') gives ['The', 'quick', 'brown', 'fox'].

//str.split(''):
//* What it does: Splits the string between every single character.
//* Result: You get an array where each character is a separate item.
//* Example: 'hello'.split('') gives ['h', 'e', 'l', 'l', 'o'].

//str.split():
//* What it does: Without specifying anything, it does not split the string.
//* Result: You get an array with the original string as the only item.
//* Example: 'hello world'.split() gives ['hello world'].




