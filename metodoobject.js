console.clear();

const persona = {
    nombre: "Mateo",
    apellido: "López",
    edad: 25
}

//** Método: Object.keys
console.log(Object.keys(persona).length);

//** Método: Object.values
console.log(Object.values(persona));

const salarios = {
    enero: 920,
    febrero: 1040,
    marzo: 1210
}
//** Método: Para sumar parte de los valores del objeto usando el método reducer
console.log(Object.values(salarios).reduce((total, actual) => total + actual, 0));

//** Método: Object.entries, lo que devuelve un array de arrays
console.log(Object.entries(salarios));

const person = {
    nombre: "Mateo",
    apellido: "López",
    edad: 25
};

Object.entries(person).forEach((par) => {
    const clave = par[0];
    const valor = par[1];
    if (typeof valor === "string") person[clave] = valor.toUpperCase();
});
console.log(person)

//** Método: Object.fromEntries()
const persons = [
    ["nombre", "MATEO"],
    ["apellido", "LÓPEZ"],
    ["edad", 25]
]
console.log(Object.fromEntries(persons));

//** Método: Object.assign() */

const personaje = {
    name: "mateo",
    surname: "Hernández",
    age: 33,
    mail: "mateo.diaz@gmail.com",
    favoriteColor: "Red",
    direction: {
        calle: "calle pecari",
        localidad: "Bogota",
        Country: "Colombia",
        facturacion: {
            calle: "calle liebre"
        }
    }
};
const personaclonada = {}

Object.assign(personaclonada, personaje);

console.log(personaje);
console.log(personaclonada);


