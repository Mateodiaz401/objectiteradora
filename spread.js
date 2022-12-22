//** spread operator


console.clear();

const list1 = [1, 2, 3];
const list2 = [4, 5, 6]
const listtwo = [...list1, ...list2, 7, 8, 9]
console.log(listtwo);
console.log('_______------_________');
function sum(num1, num2, num3) {
    const res = num1 + num2 + num3;
    console.log(res);
}

sum(list1[2], list2[0], list1[1]);

//** rest operator
console.log('rest operator');
function sums(...numeros) {
    const resultado = numeros.reduce(
        (prevValue, nextValue) => prevValue + nextValue, 0
    );
    console.log(resultado);
}
sums(...list1, ...list2)

//**  spred con objetos
const personaje = {
    name: "mateo",
    surname: "Hernández",
    age: 33,
    mail: "mateo.diaz@gmail.com",
    favoriteColor: "Red",
    conutry: "cancun",
    alergias: {
        trigo: true,
        lactosa: false
    }

};
const direcion = {
    calle: "calle pecari",
    localidad: "Bogota",
    pais: "colombia"

}
const persona = {
    ...personaje,
    ...direcion
};

console.log(persona);

