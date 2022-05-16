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
// Forma sin el metodo filter()
const developers = []
for(let i = 0; i<students.length; i++){
  if(students[i].course === 'web Development'){
    developers.push(students[i])
  }
}

console.log(developers);
*/
/*
const result = students.filter((student) => {
  if(student.course === 'web Development'){
    return true
  }
})

console.log(result);
*/

const result = students.filter((student) => student.course === 'web Development')

console.log(result);


/* cuando return true : Esta condición fue dada y si fue dada entonces retorna: true*/