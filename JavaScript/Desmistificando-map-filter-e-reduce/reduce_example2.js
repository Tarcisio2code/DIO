const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30 
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 0.01
    }  
]
/**
 * Reduce
 * 
 */ 

 //percorre o array e retorna o resultado da função
const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
},{totalAge: 0, totalWeight: 0})

console.log(totalWeight)