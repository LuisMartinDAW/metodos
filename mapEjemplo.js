// La diferencia con forEach este si que nos retorna un arreglo nuevo.
const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "Jhon",
    lastname: "Doe",
    age: 22,
    course: "web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Finalcial Management",
  }
];
/*
students.map((student) =>{
  console.log(student);
});

*/
/*
const fullnames = students.map((student) =>{
  return `${student.name} ${student.lastname}`;
});

console.log(fullnames);
*/
/*
const names = students.map(student =>{
  return {
    fullname: `${student.name} ${student.lastname}`,
    age: student.age,
    course: student.course
  }
});

console.log(names);
*/
/* 
//Para añadir mas datos
const names = students.map(student =>{
  return {
    name:student.name,
    lastname: student.lastname,
    age:student.age,
    course: student.course,
    title:`${student.name} - ${student.course}`
});

console.log(names);
  */
/*
//Para añadir mas datos con sprite operator
const names = students.map(student => {
  return {
   ...student,
    title:`${student.name} - ${student.course}`,
     
  }
})

console.log(names);
*/

/*
const names = students.map(student => ({
  ...student,
  course: 'Programing'
}))

console.log(names);
*/
/*
const newcourses = students.map(student => ({
  ...student,
  course: 'Programing'
}))

const doubleage = newcourses.map(student => ({
  ...student,
  age: student.age * 2}))

console.log(doubleage);

*/

const doubleage = students.map(student => ({
  ...student,
  course: 'Programing'
})).map(student => ({
  ...student,
  age: student.age * 2}))

console.log(doubleage);
