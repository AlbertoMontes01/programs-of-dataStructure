//
// ES6
// to complete
//
////////////////////////////////////////////////////////////////////////////////
      /* PARA MODIFICAR LOS VALORES BASTA CON CAMBIAR EL VALOR DE R */
////////////////////////////////////////////////////////////////////////////////

let r = 10 //ESTA VARIABLE DEFINE EL TAMAÑO DE LA STACK
let c=0 //PASOS
let time=0 //TIEMPO DE EJECUCION
class Stack {
    constructor(){
        this.data = []
        this.top = r//stack size
    }

    push(o){//validate stack not full
        if (this.isFull())
            console.log('full stack')
        else{
            this.data.push(o)
            console.log(o,'added')
        }
    }

    peek(){
        return this.data[this.data.length-1]
    }

    pop(){//validate stack not empty
        if (this.isEmpty())
            console.log('empty stack')
        else
            console.log(this.data.pop(),'popped')
    }

    isEmpty(){
        if (this.data.length === 0)//this.size()
            return true
        else
            return false
    }

    isFull(){
        if (this.data.length === this.top)
            return true
        else
            return false
    }

    size(){
     return this.data.length
    }

    search(k){}
    traverse(){}

    toString(){}
    makeEmpty(){
        this.data = []
    }
}

//let s = new Stack()

function ordenNumadds(s,x){
        if (s.length==0 || x < s[s.length-1]){
            s.push(x);
          c++
            return;
        }
  
        // si el numero top es mayor lo sacamos al stack temporal para luego regresarlo
        let tempStack = s.pop();
        ordenNumadds(s, x);
  
        // Metemos el numero ya ordenado al stack temporal
        s.push(tempStack);
  c++
}
 
// Funcion para ordenar la stack
function sortStack(s){
    // si la stack no esta vacia
        if (s.length!=0)
        {
            // quitamos el numero en top
            let x = s.pop();
            // acomodamos el stack
            sortStack(s);
            // regresamos el numero al stack ya ordenado
            ordenNumadds(s, x);
          c++ //Contamos los pasos
        }
}
 
// Funcion para imprimir la stack
function showStack(s){
    for(let i=s.length-1;i>=0;i--){
        console.log(s[i]+" ");
    }
}
     
 
let s=[];

//Funcion para generar los numeros
for (var i=0;i<r; i++){
  s.push(Math.floor(Math.random() * r))
}
 
console.log("Stack antes de ser ordenado:");
showStack(s);
console.log(" Stack despues de ser ordenado: ");
 console.time(time)
sortStack(s);
console.log("Tiempo que toma ordenarlo: ")
 console.timeEnd(time)
showStack(s);
console.log("Total de pasos que llevo ordenarlo "+c)
 
 