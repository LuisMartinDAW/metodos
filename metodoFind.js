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
    name: "Ryan",
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

/*Método Find() nos permite buscar un elemento dentro de un arreglo. Por ejemplo quiero un arreglo que todo los elementos sea al nombre Jhon*/
/*
const result = students.find(function (student){
  if(student.name === 'Ryan'){
    return 1
  }
})

console.log(result);

*/
// Devuelveme los estudiantes que tienen la edad 20

/*
const result = students.find(function (student){
  if(student.age === 20){
    return 1
  }
})

console.log(result);

*/

// Mismo resultado con Arrow function

const result = students.find((student) => student.age === 20)

console.log(result)