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

/* El método some(). Supongamos que sólamente quiero hacer una comprobación y solo obtener un true o false a partir de una determinada condición. Yo no quiero encontrar objetos, ni quiero retornar un nuevo arreglo, simplemente quiero saber. Si existen estudiantes si son mayores a 24 años, por ejemplo y que me retorno ture/false si esa condición es dada.*/

/*Some solo retorna una respuesta booleana en una determinada consición*/
/*
const result = students.some(function(student){
  if(student.age > 20 && student.lastname === 'Doe'){
    return true
  }
})

console.log(result)
*/
// Escritura más simplificada
/*
const result = students.some((student) => student.age >20 && student.lastname === 'Doe')

console.log(result);
*/
console.log(students.some((student) => student.age > 20 && student.lastname === 'Doe'))