


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
    if (this.dataStore.length == 0) {
      console.log("esta vacio")
      return true
    }
    else {
      console.log("no esta vacio")
      return false
    }
  }

  this.full = function() {
    if (this.dataStore.length == 5) {
      console.log("Esta lleno")
      return true
    }
    else {
      console.log("Esta vacio")
      return false
    }
  }
}


//
// test program
//
let q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")

q.enqueue("Pedro")
q.enqueue("Juan")/*
q.enqueue("Jennifer")
q.enqueue("Jenniferrr")*/
console.log("Preguntamos si esta vacio:")
console.log( q.empty())
console.log("Preguntamos si esta lleno:")
console.log(q.full())
console.log(q.dataStore)
q.dequeue()

console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

q.dequeue()
console.log(q.toString())
console.log('done')