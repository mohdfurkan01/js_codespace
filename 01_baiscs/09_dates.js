let myDate = new Date();

console.log(typeof(myDate)); //object


console.log("1st console==>", myDate); //2024-09-02T18:01:25.144Z
console.log("2nd console==>",myDate.toString()); // Mon Sep 02 2024 18:03:39 GMT+0000 (Coordinated Universal Time)
console.log("3rd console==>",myDate.toDateString()); // Mon Sep 02 2024
console.log("4th console==>",myDate.toISOString()); // 2024-09-02T18:09:29.766Z
console.log("5th console==>",myDate.toLocaleDateString()); // 9/2/2024
console.log("6th console==>",myDate.toLocaleString()); // 9/2/2024, 6:11:50 PM
console.log("7th console==>",myDate.toLocaleTimeString()); // 6:12:59 PM
console.log("8th console==>", myDate.toTimeString()); // 18:14:02 GMT+0000 (Coordinated Universal Time)
console.log("9th console==>", myDate.toUTCString()); // Mon, 02 Sep 2024 18:16:47 GMT

//Months start from zero in js
let currentDate = new Date(2022, 0, 25);  
console.log(currentDate.toDateString()); // Tue Jan 25 2022 


let currentDate1 = new Date(2022, 0, 25, 5, 4);  
console.log(currentDate1.toLocaleString()); // 1/25/2022, 5:04:00 AM 

//let currentDate3 = new Date("15-01-2022"); // Invalid Date
let currentDate3 = new Date("01-15-2022");   //here month start from 1 not zero remember!
console.log(currentDate3.toLocaleString()); // 1/15/2022, 12:00:00 AM (format MM-DD-YY)

//comparison is always done in milliseconds
//ms = milisecond 
let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1725302193648 in ms
console.log(currentDate3.getTime()); // 1642204800000 in ms

// to convert in ms
console.log(Date.now()/1000); // 1725302462.436
// to avoid decimal use floor or ceil method
console.log(Math.floor(Date.now()/1000)); 1725302545


console.log(`you will get day info :${currentDate3.getDay()}`);


let customizeDate = currentDate3.toLocaleDateString('default', {
   //click ctrl + space to see all the properties
    //weekday:"narrow"   //S
    //weekday:"short"    //Sat
    weekday:"long",       // Saturday
    
})
console.log(customizeDate);


let date1 = new Date("2024-09-01");
let date2 = new Date("2024-09-02");
console.log(date1.getTime() < date2.getTime()); // true
console.log(date1.getTime() === date2.getTime()); // flase
