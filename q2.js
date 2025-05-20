const numeros = [1,2,3,4,5,6,7,8]; 
function numerospares(array){ 
const pares = array.filter(numero => numero %2 ===0); 
const dobropares = pares.map(numeros => pares * 2); 
return dobropares; 
} 
numerospares(numeros); 
console.log("Os pares são:",pares); 
console.log("o dobro deles é:",dobroPares);