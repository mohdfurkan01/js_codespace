function writeMyName(){
console.log("A");
console.log("h");
console.log("s"); //function definition
console.log("a");
console.log("n");

}
//writeMyName //its called reference

//writeMyName() //() for execute

function addTwoNumbers(num1, num2){ //(num1, num2)-> parameters
console.log(num1+num2);

}
//addTwoNumbers(3,7) //(3,7)-> arguments

const result = addTwoNumbers(3,7) //10
console.log("Result is:", result);//Result is: undefined

//see the difference

function addMyNumbers(num1, num2){ 
    let result1 = num1 + num2;
    return result1
    //or
    //return num1 + num2
    
    }
    const result1 = addMyNumbers(3,7) //10
    console.log("Result is:", result1);//Result is: 10


    // function loginUserMsg(username = "sam"){ called default value
    function loginUserMsg(username){
        // if(username === undefined){
        if(!username){
            console.log("Please Enter a Username");
            return
        }
        return `${username} just logged in`
    }

    loginUserMsg("Ahsan") //no result
    //console.log(loginUserMsg("Ahsan")); //Ahsan just logged in
    console.log(loginUserMsg()); //Please Enter a Username
     