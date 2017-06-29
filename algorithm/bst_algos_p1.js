function BSTNode(val){
	this.value = val;
	this.right = null;
	this.left = null;
}

function BST(){
	this.root = null;
	return this;
}

BST.prototype.add = function(val){
	var newNode = new BSTNode(val);
	if(this.root==null){
		this.root = newNode;
		return this;
	}else{
		var current = this.root;
		while(current){
			if(val<current.value){
				if(current.left==null){
					current.left = newNode;
					return this;
				}else{
					current=current.left;
				}
			}else if (val>current.value){
				if(current.right==null){
					current.right = newNode;
					return this;
				}else{
					current=current.right;
				}
			}
		}
	}
}
// These recursive functions take in a node, so that the recursive calls can work easily. 
// the rootNode will have different values in the recursive calls, basically acting as if the rootNode was the root of a smaller subtree within the larger BST, and we want the vaue of the size/height of that particular subtree to compute the value in the BST as a whole.
BST.prototype.size = function(rootNode){
	if(rootNode == null){
		return -1;
	}else{
		if(this.size(rootNode.right)>this.size(rootNode.left)){
			return this.size(rootNode.right) +1;
		}else{
			return this.size(rootNode.left) +1;
		}
	}
}
BST.prototype.print = function(rootNode){
	// Look at the order in which I run this code. Why does it matter? What if I swapped lines 54 and 56?
	if(rootNode != null){
		this.print(rootNode.left);
		console.log(rootNode.value);
		this.print(rootNode.right);
	}
}
BST.prototype.height = function(rootNode){
	// BASE CASES
	// fail fast, if the node is null, its a tree of height 0 technically
	if (rootNode == null){
		return 0;
	// if the node exist but has no .left or .right nodes, then its a tree of height 1
	}else if(rootNode.left == null && rootNode.right == null){
		return 1;
	// FORWARD PROGRESS/RECUSRIVE CALL
	// if both the .left and .right point to nodes, then we need to compare the heights of the right and left subtrees and decide which one is larger.
	// we add 1 to the height of the tallest subtree, because the current rootNode adds one to the total height
	}else if(rootNode.left != null & rootNode.right != null){
		var leftHeight = this.height(rootNode.left);
		var rightHeight = this.height(rootNode.right);
		if(leftHeight>rightHeight){
			return 1+ leftHeight;
		}else{
			return 1 + rightHeight;
		}
	}else if(rootNode.left != null){
		return 1 + this.height(rootNode.left);
	}else if (rootNode.right != null){
		return 1 + this.height(rootNode.right);
	}
}
// draw out the tree yourself and see if these algos work!
myBST = new BST().add(20).add(10).add(30).add(5).add(40).add(25);
console.log("printing the values in myBST, smallest to largest");
myBST.print(myBST.root);
console.log("the height of myBST is:",myBST.height(myBST.root));
Add Comment