/*
BST Successor Search
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node 
with the smallest key greater than the key of the input node (see examples below). 
Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor 
that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, 
return null.

Explain your solution and analyze its time and space complexities.

alt In this diagram, the inorder successor of 9 is 11 and the inorder successor of 14 
is 20.

Example:

In the diagram above, for inputNode whose key = 11

Your function would return:

The Inorder Successor node whose key = 12

*/

function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  let root = this.root;
  // find it here
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
	let root = this.root;

	// 1. If the tree is empty, create the root
	if(!root) {
		this.root = new Node(key);
		return;
	}
	
	// 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
	var curNode = this.root;
	let newNode = new Node(key);
	while(curNode !==null) {
		if(key < curNode.key) {
			if(!curNode.left) {
				curNode.left = newNode;
				newNode.parent = curNode;
				break;
			}
			else {
				curNode = curNode.left;
			}
		}
		else {
			if(!curNode.right) {
				curNode.right = newNode;
				newNode.parent = curNode; 
			}
			else {
				curNode = curNode.right;
			}
		}
	}
}


// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your 
// findInOrderSuccessor function on. 
BinarySearchTree.prototype.getNodeByKey = function(key) {
	let curNode = this.root;

	while(curNode) {
		if(key === curNode.key) {
			return curNode;
		}
		if(key < curNode.key) {
			curNode = curNode.left;
		}
		else {
			curNode = curNode.right;
		}
	}
	return null;
}
/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(14);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if(succ) {
    console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
    console.log("Inorder successor does not exist");
}






