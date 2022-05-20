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

// Método sort() ordena los datos.

/*El método sort() recibe dos objetos. El prmer objeto de la lista y luego el que le sigue
*/

/*
const sortedStudents=students.sort(function(first, second){
  if(first.age < second.age){
    return 1
  }else{
    return -1
  }
})

console.log(sortedStudents);
*/



/*
const sortdStudent = students.sort((a,b) => a.age > b.age ? 1 : -1);
console.log(sortdStudent);
*/

/*
// Tambien se puede hacer sin condicional

const sortdStudent = students.sort((a,b) => a.age -b.age);

console.log(sortdStudent);
*/

const numbers = [10, 30, 1000, 100];

const sortedNumbers = numbers.sort((a,b) => a - b)

console.log(sortedNumbers);