//
//
// IMPORTO DE MI DOCUMENTO QUE ESTA DENTRO DE MI NOMBRE EN LA CARPETA LINKED EN EL DOCUMENTO NODE5ES.JS


import { Node, Linked } from '../../../advm/linked/node5es.js'

///////////////////////////////////////////////////// PRUEBA DE QUE FUNCIONA EL IMPORT //////////////////////////////////////////////////


let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)//new Node('a')
l.traverse(l.getHead())

l.prepend(n2)
l.traverse(l.getHead())

//
l.append(new Node('c'))
l.traverse(l.getHead())

//
l.prepend(new Node('d'))
l.append(new Node('e'))
console.log("Antes de utilizar insertAfter")
l.traverse(l.getHead())
//console.log(l.getTail())

//console.log(l.contains('z'))
l.insertAfter("nuevo l", "b")
//l.insertAfter("b", "l")

console.log("Despues de utilizar insertAfter")
l.traverse()

console.log("Head:")
console.log(l.getHead())
console.log("Tail: ")
console.log(l.getTail())

console.log("Antes  de utilizar insertBefore")
l.traverse()

l.insertBefore("nuevo x", "b", l)

console.log("Despues de utilizar insertBefore")
l.traverse()
console.log("nuevo head:")
console.log(l.getHead())
console.log("nuevo tail: ")
console.log(l.getTail())