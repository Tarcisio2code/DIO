const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10 
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2 
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }  
]

console.log("Primeiro array")
console.log(pets)

// Filtrando o array com uma Arrow function
//                Percorre o array       função 
//const newPets = pets.filter( (pet) => {return pet.age < 5} )

// Externalizando para uma função
const eMenorQueCinco = (numero) => {
    return numero < 5
}
const newPets = pets.filter(({ age }) => eMenorQueCinco(age))

console.log("")
console.log("Segundo array com filtro")
console.log(newPets)
