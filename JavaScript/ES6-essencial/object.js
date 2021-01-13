let user = {
    name: 'Tarcisio'
}
console.log("--> Alterando, inserindo e deletando propriedades de um objeto <--");
console.log(`Objeto sem alteração:`, user);

//Alterando através da propriedade
user.name = 'Outro nome 1';
console.log(`${user.name.slice(-1)}ª alteração:`, user);

//Utilizando o [] para "pegar" a propriedade
user['name'] = 'Outro nome 2';
console.log(`${user.name.slice(-1)}ª alteração:`, user);

//Criando uma variável atribuir uma propriedade
const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(`${user.name.slice(-1)}ª alteração:`, user);

//Criando uma nova propriedade no objeto
user.name = 'Tarcisio';
user.lastName = 'Silva';
console.log("Adcionada a propriedade lastName", user);

//Deletando uma propriedade no objeto
delete user.name;
console.log("Deletada a propriedade name", user);

console.log("\n --> Uso dos métodos do Object{keys, values e entries} <--");
user.name = 'Tarcisio';
console.log("Objeto user:", user);
//Recupera as chaves do objeto
console.log("Propriedades do objeto user", Object.keys(user));

//Recupera os valores das chaves do objeto
console.log("Valores das propriedades do objeto user", Object.values(user));

//Retorna um array de arrays, contendo [ nome_prop, valor_prop ]
console.log("Lista de propriedades e valores do objeto user", Object.entries(user));

//Merge de propriedade entre objetos
console.log("\n --> Uso do Método: Assign <--");
Object.assign(user,{fullName: 'Tarcisio Silva'});
console.log("Adcionada a propriedade fullName",user);

//Criando um novo array com as propriedades de um objeto existente, e mergeando novas propriedades
const novoObjeto = Object.assign({}, user, {age: 48});
console.log("Objeto user", user);
console.log("Novo objeto a partir do obeto user", novoObjeto);

//Previne todas as alterações em um objeto
console.log("\n --> Uso do Método: Freeze <--");
const newObject = { objeto: 'novo'};
console.log("Objeto antes do freeze", newObject);
Object.freeze(newObject);
delete newObject.objeto;
console.log("Tentativa de alterar o objeto após freeze", newObject);

//Permite apenas alterações de propriedades existentes em um objeto
console.log("\n --> Uso do Método: Seal <--");
const person = {name: 'Tarcisio'};
console.log("Objeto antes do seal", person);
Object.seal(person);
person.name = "Tarcisio Silva";
console.log("Objeto após seal, permite alterar o valor da propriedade", person);
delete person.name;
person.age = 48;
console.log("Objeto após seal, não permite deletar ou acrescentar propriedade", person);
