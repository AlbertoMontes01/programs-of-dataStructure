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
//
// test program
//

let q = new Queue()
//console.log(q.numrandom())
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
