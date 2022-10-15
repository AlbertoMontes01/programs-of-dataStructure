let c = 0 //DECLARO EL CONTADOR
let total_nums= 10 //QUE TANTOS NUMEROS QUIERE GENERAR Y TAMAÑO DE LA COLA " CON PONER AQUI EL TAMAÑO DE LA COLA TODO SE ARREGLA 10,100,1000, N "
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
/*
//
// test program
//

let q = new Queue()
q.enqueue( 1 + Math.floor(Math.random() * n))
q.enqueue( 1 + Math.floor(Math.random() * n))
q.enqueue( 1 + Math.floor(Math.random() * n))
q.enqueue( 1 + Math.floor(Math.random() * n))
q.enqueue( 1 + Math.floor(Math.random() * n))
q.enqueue("Cynthia")

q.enqueue("Jennifer")

q.enqueue("Pedro")
q.enqueue("Juan")
q.enqueue("Jennifer")
q.enqueue("Jenniferrr")
console.log(q.full)
console.log(q.dataStore)
q.dequeue()

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

q.dequeue()
console.log(q.toString())
console.log('done')
*/
//
// test program
//
//ORGANIZAR Y ORDENAR
function distribute(nums, queues, n, digit,c) {  
for (var i = 0; i < n; ++i) {
if (digit == 1) {
  c ++
queues[nums[i]%total_nums].enqueue(nums[i]);
}
else {
  c++
queues[Math.floor(nums[i] / total_nums)].enqueue(nums[i]);
}
}
}
 
 // Recoge números de la cola
function collect(queues, nums) {
    var i = 0;
for (var digit = 0; digit < total_nums; ++digit) {
while (!queues[digit].empty()) {
  c ++
nums[i++] = queues[digit].dequeue();
}
}
}
 
 // muestra la matriz
 
function dispArray(arr) {
  for(var i=0;i<total_nums; i++){
    console.log(arr[i]+ '');
  }
  
}
 
var queues = [];
for (var i = 0; i < total_nums; i++) {
    queues[i] = new Queue();
}
 
var nums = [];
 // Genera 10 números aleatoriamente
for (var i = 0; i < total_nums; i++) {
    nums[i] = Math.floor(Math.random() * total_nums);
}
console.log("Before radix sort: ");
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

console.log("\nTiempo que tomo organizarlo")
console.timeEnd(timer) //IMPRIMO EL TOTAL DEL TIEMPO
console.log("\n\nAfter radix sort: ");

dispArray(nums);
console.log("Pasos para ordenarlos: "+c)