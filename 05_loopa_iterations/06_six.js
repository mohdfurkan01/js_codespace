//const coding = ["js", "cpp", "java", "python"]

//The forEach method here loops through each item in the coding array and logs it. But it doesn't return a new array or modify the existing one.

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// })
//console.log(values);

//The filter method returns a new array with only the elements that satisfy the condition num > 4. So, elements 5 to 10 are included.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) =>{
//     num > 4
// }) //returns empty array
const newNums = myNums.filter( (num) =>{
        return num > 4
    })
 console.log(newNums);
 

 const books = [
    {
        "title": "Book one",
        "name": "white judgement",
        "publish": 1980,
        "edition":1990
        },

        {
        "title": "Book two",
        "name": "white judgement",
        "publish": 1980,
        
        },
        {
        "title": "Book three",
        "name": "white judgement",
        "publish": 1980,
        
        },
        {
        "title": "Book four",
        "name": "history",
        "publish": 2009,
        
        },
        {
        "title": "Book five",
        "name": "physics",
        "publish": 1988,
        
        },
 ]

 let userBooks = books.filter( (bk) => bk.name === 'white judgement')

 userBooks = books.filter((bk) => {
    return bk.publish >= 1980 && bk.title === 'Book four'
 })
 console.log(userBooks);
 