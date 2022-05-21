const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 20,
    course: "Marketing",
  },
  {
    name: "Jhon",
    lastname: "Doe",
    age: 20,
    course: "web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Jyan",
    lastname: "Ray",
    age: 20,
    course: "web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Finalcial Management",
  }
];

/*El método every () Pide que todos los objetos cumplan una condción y si todos cumplen al final va ha retornar true*/

const result = students.every(student => student.age === 20)

console.log(result)

const resulte = students.every(student => student.name.includes('J'))
console.log(resulte)