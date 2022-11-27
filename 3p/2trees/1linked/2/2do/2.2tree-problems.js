/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */
function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}


function preorder(n){
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
 /* ESTOS DOS SON LOS QUE FALTAN DE ACOMODAR EL POSORDER Y EL INORDER*/
function posorder(n){
  if (n!==null){
    preorder(n.l)
    preorder(n.r)
    console.log(n.d)
  }
}

function inorder(n){
  if (n!==null){
    preorder(n.l)
    console.log(n.d)
    preorder(n.r)
  }
}

let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node('*')
let q1 = new Node(12)
let q2 = new Node (10)

p.l = o1
p.r = o2
o2.l = q1
o2.r = q2
console.log("PREORDER")
preorder(p)
console.log("POSORDER")
posorder(p)
console.log("INORDER")
inorder(p)