let c = 0 //DECLARO EL CONTADOR
let n = 10 //QUE TANTOS NUMEROS QUIERE GENERAR

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
function distribute(nums, queues, n, digit) { // digit represents either the 1s
// or 10s place
for (var i = 0; i < n; ++i) {
if (digit == 1) {
queues[nums[i]%10].enqueue(nums[i]);
}
else {
queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
}
}
}

function collect(queues, nums) {
var i = 0;
for (var digit = 0; digit < 10; ++digit) {
while (!queues[digit].empty()) {
  nums[i++] = queues[digit].dequeue();
}
}
}

function dispArray(arr) {
for (var i = 0; i < arr.length; ++i) {
putstr(arr[i] + " ");
}
}

var queues = [];
for (var i = 0; i < 10; ++i) {
queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);

console.log("\n\nAfter radix sort: ");
dispArray(nums);