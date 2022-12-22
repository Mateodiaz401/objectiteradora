console.clear();

//null
//undefined
const valorNull = null; //valorUndefined == valorNull = true
const valorUndefined = undefined;
const valorResto = {};//valorUndefined == valorResto = false
console.log("resultado es:", valorUndefined == valorResto);
//string
//number
//bolean
const valorString = '';
const valorNumber = 0;
const valorBolean = false;

console.log("El valor es:", valorString == valorNumber);
//object
const valorObjeto = {
    nombre: 'juan',
};

console.log(valorObjeto.valueOf().toString());


