const alfabeto= ["b", "d", "a", "c", "e"]; 
function ordemalfabetica(array) { 
const ordem = array.sort((a, b) => { 
if (a < b) return -1; 
if (a > b) return 1; 
return 0; 
}); 
console.log(ordem); 
return ordem; 
} 
ordemalfabetica(alfabeto);