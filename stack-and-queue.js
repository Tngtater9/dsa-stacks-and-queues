// #1 Create a stack class
class _sNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		const node = new _sNode(data, null);

		if (this.top === null) {
			this.top = node;
			return this.top;
		}

		node.next = this.top;
		this.top = node;
	}

	pop() {
		if (this.top === null) {
			return;
		}

		const node = this.top;
		this.top = node.next;
		return node.data;
	}

	getTop() {
		return this.top;
	}
}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// #2 Useful methods for a stack
const peek = (className) => {
	console.log(className.top);
};

const isEmpty = (className) => {
	return className.top === null ? true : false;
};

const display = (className) => {
	while (className.top !== null) {
		console.log(className.top.data);
		className.top = className.top.next;
	}
};
starTrek.pop();
starTrek.pop();

display(starTrek);

// #3 Check for palindromes using a stack
function is_palindrome(s) {
	s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
	// Your code goes here

	s = s.split('');
	let sStack = new Stack();
	for (let i = 0; i < s.length; i++) {
		sStack.push(s[i]);
	}

	let i = 0;
	while (sStack.top !== null) {
		let top = sStack.pop();
		if (s[i] !== top) {
			return false;
		}
		i++;
	}
	return true;
}

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

// #4 Matching parentheses in an expression

// #5 Sort stack
const notSorted = new Stack();
for (let j = 0; j <= 10; j++) {
	notSorted.push(Math.floor(Math.random() * 10));
}

const sortStack = (stack) => {
	const sorted = new Stack();
	let a;
	let b;
	let c;

	a = stack.pop();
	sorted.push(a);
	a = stack.pop();
	while (stack.top !== null && a !== null) {
		if (stack.top.data > a) {
			if (stack.top.data > sorted.top.data) {
				b = sorted.pop();
				c = stack.pop();
				sorted.push(c);
				if (b < a) {
					sorted.push(b);
				} else {
					sorted.push(a);
					a = b;
				}
			} else {
				b = stack.pop();
				stack.push(a);
				a = b;
			}
		} else if (stack.top.data < a) {
			if (a < sorted.top) {
				b = sorted.pop();
				sorted.push(a);
				a = b;
			} else {
				sorted.push(a);
				if (stack.top) {
					a = stack.pop();
				} else {
					a = null;
				}
			}
		} else {
			if (a.data > sorted.top.data) {
				b = sorted.pop();
				sorted.push(a);
				a = stack.pop();
				sorted.push(a);
				if (stack.top) {
					a = stack.pop();
				} else {
					a = null;
				}
			}
		}
	}

	display(sorted);
};

sortStack(notSorted);

// #6 Create a queue using Singly linked list
class _SLLNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SLLQueue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(data) {
		const node = new _SLLNode(data);

		if (this.first === null) {
			this.first = node;
		}
		if (this.last) {
			this.last.next = node;
		}
		this.last = node;
	}
	dequeue() {
		if (this.first === null) {
			return;
		}
		const node = this.first;
		this.first = this.first.next;

		if (node === this.last) {
			this.last = null;
		}

		return node;
	}
}

const starTrekQ = new SLLQueue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

const SLLQpeek = (className) => {
	return className.first.data;
};

const isSLLQEmpty = (className) => {
	return className.first === null && className.last === null ? true : false;
};

const SLLQDisplay = (className) => {
	while (className.first !== null) {
		console.log(className.first.data);
		className.first = className.first.next;
	}
};
starTrekQ.dequeue();
starTrekQ.dequeue();
SLLQDisplay(starTrekQ);

// #7 Create a queue class using Doubly linked List
class _DLLNode {
	constructor(data, prev, next) {
		this.data = data;
		this.next = null;
	}
}

class DLLQueue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(data) {
		const node = new _DLLNode(data, this.last, null);

		if (this.first === null) {
			this.first = node;
		}
		if (this.last) {
			this.last.next = node;
		}
		this.last = node;
	}
	dequeue() {
		if (this.first === null) {
			return;
		}
		const node = this.first;
		this.first = this.first.next;
		this.first.prev = null;

		if (node === this.last) {
			this.last = null;
		}

		return node;
	}
}

const starTrekD = new DLLQueue();

starTrekD.enqueue('Kirk');
starTrekD.enqueue('Spock');
starTrekD.enqueue('Uhura');
starTrekD.enqueue('Sulu');
starTrekD.enqueue('Checkov');
starTrekD.dequeue();
starTrekD.dequeue();

console.log(starTrekD.first.data);

// #8 Queue implementation using a stack
const s1 = new Stack();

s1.push('Kirk');
s1.push('Spock');
s1.push('Uhura');
s1.push('Sulu');
s1.push('Checkov');

const stackToQueue = (stack) => {
	const queue = new Stack();
	while (stack.top !== null) {
		queue.push(stack.pop());
	}

	return queue;
};

display(stackToQueue(s1));

// #9 Square dance pairing
const F = new SLLQueue();
const M = new SLLQueue();

F.enqueue('F Jane');
M.enqueue('M Frank');
M.enqueue('M John');
M.enqueue('M Sherlock');
F.enqueue('F Madonna');
M.enqueue('M David');
M.enqueue('M Christopher');
F.enqueue('F Beyonce');

const pairOff = (line1, line2) => {
	while (line1.first !== null && line2.first !== null) {
		let male = line1.dequeue();
		let female = line2.dequeue();
		console.log(
			`Female dancer is ${female.data}, and the male dancer is ${male.data}`
		);
	}
	let count = 0;
	if (line1.first !== null) {
		while (line1.first !== null) {
			line1.dequeue();
			count++;
		}
		console.log(`There are ${count} male dancers waiting to dance`);
	}
	if (line2.first !== null) {
		while (line2.first !== null) {
			line2.dequeue();
			count++;
		}
		console.log(`There are ${count} female dancers waiting to dance`);
	}
};

pairOff(M, F);

//  #10 The Ophidian Bank
function bank(line) {
	while (line.first !== null) {
		let success = Math.floor(Math.random() * 4);

		if (success === 0) {
			console.log(SLLQpeek(line), ' did not have the correct paperwork.');

			line.enqueue(line.dequeue());
		} else {
			console.log(SLLQpeek(line), ' was served.');
			line.dequeue();
		}
	}
}

const line = new SLLQueue();

for (let i = 0; i < 10; i++) {
	line.enqueue(i);
}

bank(line);
