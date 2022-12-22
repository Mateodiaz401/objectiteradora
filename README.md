### generar nuestro propio object iteradora

```sh
console.clear();

const personaObj = {
    name: "mateo",
    surname: "Hernández",
    age: 33,
    mail: "mateo.diaz@gmail.com",
    favoriteColor: "Red",
    conutry: "cancun"

}
const personArr = ["Roberto", 'Hernándes', 33, "mateo.diaz@gmail.com", "Red"];

//** funciones generadoras no escalable
/*personaObj[Symbol.iterator] = function* () {
    yield personaObj.name;
    yield personaObj.surname;
    yield personaObj.age;
    yield personaObj.mail;
    yield personaObj.favoriteColor;
}*/
//** funciones generadoras escalable 1
/*personaObj[Symbol.iterator] = function () {
    const values = Object.values(personaObj);
    let index = 0;
    return {
        next() {
            const value = values[index];
            index++;
            if (index > values.length) {
                return {
                    value,
                    done: true,
                }
            }
            return {
                value,
                done: false,
            }
        }
    }

}*/
//**  funciones generadoras escalable 2
personaObj[Symbol.iterator] = function* () {
    const values = Object.values(personaObj);
    for (const value of values) {
        yield value;
    }
}
for (const prop of personaObj) {
    console.log(prop);
}

console.log('Aqui acaba el yield');

// for (const propiedad of personArr) {
//     console.log(propiedad);
// }

```
