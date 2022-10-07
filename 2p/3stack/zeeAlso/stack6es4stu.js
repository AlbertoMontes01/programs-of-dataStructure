//
// ES6
// to complete
//
c = 0
r = 0
class Stack {
  constructor() {
    this.data = []
    this.top = 5//stack size
  }

  push(o) {//validate stack not full
    if (this.isFull())
      console.log('full stack')
    else {
      this.data.push(o)
      console.log(o, 'added')
    }
  }

  peek() {
    return this.data[this.data.length - 1]
  }

  pop() {//validate stack not empty
    if (this.isEmpty())
      console.log('empty stack')
    else
      console.log(this.data.pop(), 'popped')
  }

  isEmpty() {
    if (this.data.length === 0)//this.size()
      return true
    else
      return false
  }

  isFull() {
    if (this.data.length === this.top)
      return true
    else
      return false
  }

  size() {
    return this.data.length
  }

  search(data) {
    r = s.data
    console.log(r)
    for (let i = 0; i < this.top; i++) {
      if (r[i] == data) {
        console.log("el numero " + data + ", se encuentra en la posicion " + i)
        return true
      }

    }
    return false
  }
  //FUNCION PARA REALIZAR LA BUSQUEDA CON CUALQUIER TAMAÑO DE LA PILA
  /*search(arr, data) { //PIDO COMO PARAMETROS EL ARRAY Y EL NUMERO ABUSCAR
    arr = s.data
    for (var i = 0; i < arr.length; ++i) { //ITERO SOBRE EL ARRAY PARA PODER COMPARAR 

      c++ //AUMENTO EL CONTADOR DE LOS PASOS
      if (arr[i] == data) { //COMPARO EL VALOR QUE TENGO EN EL INDICE Y SI ES IGUAL QUE EL QUE ESTOY BUSCANDO LO MUESTRO
        //console.log("pasos que llevo encontrarlo: " + c)
        console.log(arr)
        console.log("se encuentra en la posicion " + c)
        return true; //REGRESO TRUE PORQUE LO ENCONTRE
      }
    }
    return false; //REGRESO FALSE PORQUE NO LO ENCONTRE
  }*/
  traverse() { }

  toString() { }
  makeEmpty() {
    this.data = []
  }
}

let s = new Stack()
s.push(4)
s.push(0)
s.push(3)
s.push(2)
s.push(1)
s.push(5)
s.search(1)
console.log('size', s.size())
console.log(s.peek())
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
console.log('size', s.size())
s.pop()
