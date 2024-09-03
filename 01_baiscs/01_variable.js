const companyId = 12342;
let companyEmail = "sdegoogle@gmail.com";
var companyPassword = "78787"
companyCity =  "New Delhi"; //but not a good way
let companyState ;
//when a variable is declared and not assigned any value it will give us "undefined"

//companyId = 555 //can not changed 

companyEmail = "dev123@gmail.com";
companyPassword = "33334";
companyCity = "Hydrabad"

console.log(companyId); //only 1 statement can write

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([companyId, companyEmail, companyPassword, companyCity, companyState]);
