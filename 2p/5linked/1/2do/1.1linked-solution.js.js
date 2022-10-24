/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, or object
 * @returns {bool} - true or false, if value v exists or not,
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * PROBLEM 2
 * getTail()
 *
 * retrieve the node at the tail
 * @returns {Node} - Node at the tail or null if the list is empty
 *
 * @example
 * getTail()
 *
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
//
// imports ES5
// Node (Node4stu5es.js)
//
function Node(data) {//constructor
  this.data = data
  this.next = null
}

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.getTail = getTail
  this.contains = contains
}

function getHead() { return this.head }

//Agrega un elemento al principo
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

//Agrega un elemento al final
function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let n = this.head
  let f = 0
  while (n) {
    if (n.data === v) {
      console.log(f.data)
      return true
    }
    f = n
    n = n.next
  }
  return false
}
function getTail() {
  console.log("Tail: ", this.tail)
  return this.tail
}
//first
//let n1=new Node('a',new Node('f'))
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
l.append(new Node('di'))

l.traverse(l.getHead())
console.log(l.getTail())

console.log(l.contains('b'))