const course = {
  coursename: "js in Hindi",
  price: "999",
  courseInstructor: "Hitesh Sir",
  havingChild: false,
};

//course.courseInstructor

//const {courseInstructor} = course
//console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);

const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;

// const navbar = ({company})=>{
// }
// navbar(company="apple")

//JSON format
// {
//     "name":"Ahsan",
//     "course":"javascript",
//     "price":"free"
// }

[{}, {}, {}];

//https://api.github.com/users/hiteshchaudhry
