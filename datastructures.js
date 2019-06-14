function TreeNode (value) {
	this.value = value
	this.left = null
	this.right = null
}

function BinarySearchTree(value) {
	this.root = value ? new TreeNode(value) : null
	this.getRoot = function() {return this.root}
	
	this.add = function(value){
		
		node = new TreeNode(value)
		
		if (this.root == null) {
			this.root = node
			return
		} else {
			insert(node, this.root)
			return
		}
	}
	// implement remove node
	this.remove = function(value){
		result = lookupNode(value, this.root)
		if (result) {
			
		}
	}
	
	// implement search node
	this.search = function(value){
		if (this.root) {
			return lookupNode(value, this.root)
		} else {
			return null
		}
	}
	
	this.getMin = function () {
		if (this.root) {
			result = this.root
			while (result.left) {
				result = result.left
			}
			return result
		} else {
			return null
		}
	}
	
	//Utility Functions on the Class.
	function insert(newNode, existingNode) {
		if (newNode.value == existingNode.value) {
			return //don't add, node with that value already exists
		}
		if(newNode.value > existingNode.value) {
			if(existingNode.right == null) {
				existingNode.right = newNode
				return
			} else {
				insert(newNode, existingNode.right)
				return
			}
		} else {
			if(existingNode.left == null) {
				existingNode.left = newNode
				return
			} else {
				insert(newNode, existingNode.left)
				return
			}
		}
	}
	
	function lookupNode(value, node) {
		if (node == null) {
			return null
		}
		if (value == node.value) {
			return node
		} else if(value > node.value) {
			return lookupNode(value, node.right)
		} else {
			return lookupNode(value, node.left)
		}
	}
	
}


// binary Search
myArray = [1,2,3,4,5,6,7,8,9,10,11,22,43,44]
function binarySearch (item, array) {
	console.log(array)
	result = false
	midIndex = Math.floor((array.length - 1)/2)
	console.log(midIndex)
	if (item == array[midIndex]) {
		console.log("equals")
		result = true
	} else if (item < array[midIndex]) {
		console.log("less than", array[midIndex])
		binarySearch(item, array.slice(0, midIndex))
	} else if (item > array[midIndex]) {
		console.log("more than", array[midIndex])
		binarySearch(item, array.slice(midIndex+1, array.length))
	}
	return result
}




//find all indexes in a string
var str = "I learned to play the Ukulele in Lebanon."
var search = "le"

function getIndeces (search, str) {
	//q = q.toLowerCase()
	str = str.toLowerCase()
	var result = []
	var startPoint = 0
	while (str.indexOf(search, startPoint) > -1) {
		result.push(str.indexOf(search, startPoint))
		startPoint = result[result.length - 1] + 1
	}
	return result
}

/*
Function that takes two strings s1 and s2 and returns the longest
common subsequence of s1 and s2

"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"ABBA", "ABCABA" => "ABBA"

"AGTB"
A = 0,4  4
G = 1,2  0
T = 3    2
B = 5    6

AGGTAB GTAB
*/

let s1 = "ABAZDC"
let s2 = "BACBAD"

function findLongestSubsequence(s1, s2) {
	let s1Arr = s1.split("")
	let s1Arr2 = s1.split("")
	let s2Arr = s2.split("")
	let s2Arr2 = s2.split("")
	let candidates = []
	while (s1Arr.length > 0) {
		candidates.push(getSubsequence(s1Arr, s2Arr))
		s1Arr.shift()
	}
	while (s2Arr2.length > 0) {
		candidates.push(getSubsequence(s2Arr2, s1Arr2))
		s2Arr2.shift()
	}
	console.log(candidates)
	let result = ""
	for(res of candidates) {
		result = res.length > result.length ? res : result
	}
	return result
}

function getSubsequence(s1Arr, s2Arr) {
	result = ""
	let lastIndex = -1
	for(let i = 0; i < s1Arr.length; i++) {
		ch = s1Arr[i]
		if (s2Arr.indexOf(ch, lastIndex+1) > -1) {
			result += ch
			lastIndex = s2Arr.indexOf(ch, lastIndex+1)
		}
	}
	return result
}



// case insensitive comparison of two strings

function compareStringsCaseInsensitive (str1, str2) {
	if (str1.length != str2.length) {
		return false
	} else {
		let result = true
		for (let i = 0; i < str1.length; i++) {
			if (str1[i].toLowerCase() != str2[i].toLowerCase()) {
				result = false
				break
			}
		}
		return result
	}
}


//Input : arr = ["ale", "apple", "monkey", "plea"]
// str = "abpcplea"
// Output: apple

function findLargestWord(str, arr) {
	let candidates = [] 
	for (let i = 0; i < arr.length; i++) {
		candidates.push(getWord(str, arr[i]))
	}
	result = ""
	for (let i = 0; i < candidates.length; i++) {
		result = candidates[i].length > result.length ? candidates[i] : result
	}
	return result
}

function getWord(str, item) {
	arrStr = str.split("")
	item = item.trim()
	let lastIndex = -1
	let result = ""
	for (let i = 0; i < item.length; i++) {
		if (arrStr.indexOf(item[i], (lastIndex + 1)) > -1){
			result += item[i]
			lastIndex = arrStr.indexOf(item[i])
			
		}
	}
	
	return result
}


/**
 function to connect all the adjacent
 nodes at the same level in a binary tree.
 Structure of the given Binary Tree node is like following.
 
 struct Node{
  int data;
  Node* left;
  Node* right;
  Node* nextRight; 
}

*/

function TreeNode (value) {
	this.value = value
	this.left = null
	this.right = null
	this.nextRight = null
}

function BinarySearchTree () {
	// check function above
}

function BinarySearchTree(value) {
	this.root = value ? new TreeNode(value) : null
	this.getRoot = function() {return this.root}
	
	this.add = function(value){
		
		node = new TreeNode(value)
		
		if (this.root == null) {
			this.root = node
			return
		} else {
			insert(node, this.root)
			return
		}
	}
	// implement remove node
	this.remove = function(value){
		result = lookupNode(value, this.root)
		if (result) {
			
		}
	}
	
	// implement search node
	this.search = function(value){
		if (this.root) {
			return lookupNode(value, this.root)
		} else {
			return null
		}
	}
	
	this.getMin = function () {
		if (this.root) {
			result = this.root
			while (result.left) {
				result = result.left
			}
			return result
		} else {
			return null
		}
	}
}

function populateNextRightLink (tree) {
	let layerCount = 0
	let layers = {}
	let nodes = [tree.root]
	while (nodes.length > 0) {
		layers["layer_"+layerCount] == fetchLayers(nodes)
		layerCount ++
		nodes = []
		nodes.push() // will push more children nodes
	}
}

function assignNextRight (nodes) {
	let children = []
	if (nodes.length == 0) {
		return false
	}
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i+1]) {
			nodes[i].nextRight = nodes[i+1]
		}
		if (nodes[i].left) {
			children.push(nodes[i].left)
		} 
		if (nodes[i].right) {
			children.push(nodes[i].right)
		}
	}
	
	if (children.length > 0) {
		assignNextRight(children)
	}
	
	return true
}


/**
	Find ugly numbers
	Ugly numbers are numbers whose only prime factors are 2, 3 or 5.
	The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … 
*/

function findUglyNumbersSequence(toNumber, fromNumber = 0) {
	let result = [1]
	while (fromNumber <= toNumber) {
		let isUgly = isUglyNumber(fromNumber)
		if (isUgly) {
			result.push(fromNumber)
		}
		fromNumber ++
	}
	return result
}

function nthUglyNumber(n) {
	let fromNumber = 0
	let result = [1]
	while (result.length <= n) {
		let isUgly = isUglyNumber(fromNumber)
		if (isUgly) {
			result.push(fromNumber)
		}
		fromNumber ++
	}
	return result[n-1]
}

function isUglyNumber(number) {
	let result = 0
	let isUgly = false
	if (number % 2 == 0) {
		result = number / 2
	} else if (number % 3 == 0) {
		result = number / 3
	} else if (number % 5 == 0) {
		result = number / 5
	}
	if (result == 1) {
		isUgly = true
	}
	if (result > 1) {
		isUgly = isUglyNumber(result)
	}
	return isUgly
}


// Bubble Sort [1,4,5,3,2,7] - > [1,2,3,4,5,7]

function bubbleSort(arr) {
	let length = arr.length
	for (let i = 0; i < length; i++) {
		let item = arr[i]
		for (let j = i+1; j < length; j ++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
	}
	return arr
}

/* Function to sort an array using insertion sort*/
function insertionSort(arr) 
{ 
    let i, key, j;
    let n = arr.length 
    for (i = 1; i < n; i++) { 
        key = arr[i]; 
        j = i - 1; 
  
        /* Move elements of arr[0..i-1], that are 
          greater than key, to one position ahead 
          of their current position */
        while (j >= 0 && arr[j] > key) { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    }
    return arr 
}




//quick sort
function quickSort (arr, left = 0, right = (arr.length - 1)) {
	let result = partitions(arr, left, right)
	arr = result.arr
	let pi = result.pi
	
	if (left < pi) {
		quickSort(arr, left, (pi - 1))
	}
	if (right > pi) {
		quickSort(arr, pi+1, right-1)
	}
	
	
	return arr
}

function partitions(arr, left, right) {
	let pivot = arr[right]
	let leftArr = []
	let rightArr = []
	for (let i = left; i < right; i ++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i])
		}
		if (arr[i] > pivot) {
			rightArr.push(arr[i])
		}
	}
	arr = []
	arr = arr.concat(leftArr,pivot,rightArr)
	let result = {}
	result.pi = arr.indexOf(pivot)
	result.arr = arr

	return result
}


