////////////////////////////////////////////////////////////////////////////////
      /* PARA MODIFICAR LOS VALORES BASTA CON CAMBIAR EL VALOR DE total_nums */
////////////////////////////////////////////////////////////////////////////////
let c = 0 //DECLARO EL CONTADOR
let total_nums= 1000 //QUE TANTOS NUMEROS QUIERE GENERAR Y TAMAÑO DE LA COLA " CON PONER AQUI EL TAMAÑO DE LA COLA TODO SE ARREGLA 10,100,1000, N "
let timer = 0 //Contador de tiempo

function Queue() {
  this.dataStore = []

  this.top = 5 //size queue

  this.enqueue = function(element) {
    if (this.dataStore.length < this.top) {
      this.dataStore.push(element)
    } else {
      console.log("esta lleno")
  }
  }

  this.dequeue = function() {
    return this.dataStore.shift()
  }

  this.front = function() {
    return this.dataStore[0]
  }

  this.back = function() {
    return this.dataStore[this.dataStore.length - 1]
  }

  this.toString = function() {
    let retStr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n"
    }
    return retStr
  }

  this.empty = function() {
    if (this.dataStore.length == 0)
      return true
    else
      return false

  }

  this.full = function() {
    if (this.dataStore.lenght == this.top) {
      return true
    }
    else {
      return false
    }
  }
}
//
// test program
//
//ORGANIZAR Y ORDENAR
function distribute(nums, queues, n, digit,c) {  
for (var i = 0; i < n; ++i) {
if (digit == 1) {
queues[nums[i]%total_nums].enqueue(nums[i]);
  c ++
}
else {
queues[Math.floor(nums[i] / total_nums)].enqueue(nums[i]);
  c++
}
}
}
 
 // Recoge números de la cola
function collect(queues, nums) {
    var i = 0;
for (var digit = 0; digit < total_nums; ++digit) {
while (!queues[digit].empty()) {
  
nums[i++] = queues[digit].dequeue();
  c ++
}
}
}
 
 // muestra la cola
 
function dispArray(arr) {
  for(var i=0;i<total_nums; i++){
    console.log(arr[i]+ '');
  }
  
}
 
var queues = [];

//Funcion para generar las colas 
for (var i = 0; i < total_nums; i++) {
    queues[i] = new Queue();
}
 
var nums = [];
 // Genera números aleatoriamente
for (var i = 0; i < total_nums; i++) {
    nums[i] = Math.floor(Math.random() * total_nums);
}
console.log("Antes de ordenar con radix sort: ");
dispArray(nums);

//INICIO EL TIMER
console.time(timer)
//PRIMERO LO ORGANIZAMOS
distribute(nums, queues, total_nums, 1,c);
//DESPUES RECOGEMOS LOS NUMEROS
collect(queues, nums,c);
//AHORA SI QUE PASO BIEN LOSVOLVEMOS A ORGANIZAR POR SI ALGO PASO

distribute(nums, queues, total_nums, total_nums,c);
//LOS RECOGEMOS PARA FINALMENTE MOSTRARLOS YA COMO VAN
collect(queues, nums,c);

console.log("Tiempo que tomo organizarlo")
console.timeEnd(timer) //IMPRIMO EL TOTAL DEL TIEMPO
console.log("Después de ordenar con radix sort: ");

dispArray(nums);
console.log("Pasos para ordenarlos: "+c)