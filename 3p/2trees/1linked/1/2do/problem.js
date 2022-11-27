//
// add two nodes
// zee your notes
//
// then
// call preorder
// import { Node, Linked } from '../../../advm/linked/node5es.js'
import {preorder} from '../../1/preorder.js'

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let nodo = new Node ('hola')
let nodoLeft = new Node ('Como estas')
let nodoRight = new Node('Soy')
let nodoTwoLeft = new Node('Hoy')
let nodoTwoRight = new Node('Beto')

nodo.l = nodoLeft
nodo.r = nodoRight
nodoRight.l = nodoTwoLeft
nodoRight.r = nodoTwoRight

console.log("PREORDER")
preorder(nodo)