BST.prototype.isValid = function(node, direction){
	if(!node){
		node = this.root;
	}
	if(!direction){
		if(node.right && node.left){
			return this.isValid(node.right, "right") && this.isValid(node.left, "left")
		}else if (node.right){
			return this.isValid(node.right, "right");
		}else if (node.left){
			return this.isValid(node.left, "left");
		}
	}
	if (direction == "right" && node.value < this.root.value){
		return false;
	}else if (direction == "left" && node.value>this.root.value){
		return false;
	}
	if(node.right && node.left){
		if(node.right.value<node.value || node.left.value>node.value){
			return false;
		}else{
			return (this.isValid(node.right, direction) && this.isValid(node.left, direction));
		}
	}else if(node.right){
		if(node.value> node.right.value){
			return false;
		}else{
			return this.isValid(node.right, direction);
		}
	}else if (node.left){
		if(node.value< node.left.value){
			return false;
		}else{
			return this.isValid(node.left, direction);
		}
	}else{
		return true;
	}
}
// MAKE SURE TO ADD THIS FILE'S CODE TO BST_p1.js BEFORE UNCOMMENTING HERE
// // draw out the tree yourself and see if these algos work!
// console.log("creating myBst...")
// myBST = new BST().add(20).add(10).add(30).add(5).add(40).add(25);
// console.log("printing the values in myBST, smallest to largest");
// myBST.print(myBST.root);
// console.log("the height of myBST is:",myBST.height(myBST.root));
// console.log("is it valid?",myBST.isValid());

// console.log("creating invalid bst...")
// var parentOfInvalid = new BSTNode(7);
// parentOfInvalid.right = new BSTNode(11);
// var invalidTree = new BST().add(10).add(13);
// invalidTree.root.left = parentOfInvalid;
// console.log("is it valid?",invalidTree.isValid());