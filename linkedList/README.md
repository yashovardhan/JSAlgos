# Node Class API

<table class="table">

<thead>

<tr>

<td>Function</td>

<td>Arguments</td>

<td>Returns</td>

<td>Directions</td>

<td>Example</td>

</tr>

</thead>

<tbody>

<tr>

<td>Node.constructor</td>

<td>(Data, Node)</td>

<td>Node</td>

<td>Creates a class instance to represent a node. The node should have two properties, 'data' and 'next'. Accept both of these as arguments to the 'Node' constructor, then assign them to the instance as properties 'data' and 'next'. If 'next' is not provided to the constructor, then default its value to be 'null'.</td>

<td>

```           
const n = new Node('There');
n.data // 'Hi'
n.next // null
const n2 = new Node('Hi', n);
n.next // returns n
```

</td>

</tr>

</tbody>

</table>

# LinkedList Class API

<table class="table">

<thead>

<tr>

<td>Function</td>

<td>Arguments</td>

<td>Returns</td>

<td>Directions</td>

<td>Example</td>

</tr>

</thead>

<tbody>

<tr>

<td>constructor</td>

<td>-</td>

<td>(LinkedList)</td>

<td>Create a class to represent a linked list. When created, a linked list should have *no* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'.</td>

<td>

```
const list = new LinkedList();
list.head // null
```

</td>

</tr>

<tr>

<td>insertFirst</td>

<td>(data)</td>

<td>-</td>

<td>Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.</td>

<td>

```
const list = new LinkedList();
list.insertFirst('Hi There'); 
// List has one node
```

</td>

</tr>

<tr>

<td>size</td>

<td>-</td>

<td>(integer)</td>

<td>Returns the number of nodes in the linked list.</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.size(); 
// returns 3
```

</td>

</tr>

<tr>

<td>getFirst</td>

<td>-</td>

<td>(Node)</td>

<td>Returns the first node of the linked list.</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getFirst(); 
// returns Node instance with data 'a'
```
</td>

</tr>

<tr>

<td>getLast</td>

<td>-</td>

<td>(Node)</td>

<td>Returns the last node of the linked list</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getLast(); 
// returns node with data 'a'
```

</td>

</tr>

<tr>

<td>clear</td>

<td>-</td>

<td>-</td>

<td>Empties the linked list of any nodes.</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.clear();
list.size(); 
// returns 0
```

</td>

</tr>

<tr>

<td>removeFirst</td>

<td>-</td>

<td>-</td>

<td>Removes only the first node of the linked list. The list's head should now be the second element.</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeFirst();
list.getFirst(); 
// returns node with data 'a'
```
</td>

</tr>

<tr>

<td>removeLast</td>

<td>-</td>

<td>-</td>

<td>Removes the last node of the chain</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeLast();
list.size(); // returns 1
list.getLast(); 
// returns node with data of 'b'
```

</td>

</tr>

<tr>

<td>insertLast</td>

<td>(Data)</td>

<td>-</td>

<td>Inserts a new node with provided data at the end of the chain</td>

<td>

```
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertLast('c');
list.getLast(); 
// returns node with data 'C'
```

</td>

</tr>

<tr>

<td>getAt</td>

<td>(integer)</td>

<td>(Node)</td>

<td>Returns the node at the provided index</td>

<td>

```
const list = new List();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.getAt(1); 
// returns node with data 'b'
```
</td>

</tr>

<tr>

<td>removeAt</td>

<td>(integer)</td>

<td>-</td>

<td>Removes node at the provided index</td>

<td>

```
const list = new List();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.removeAt(1);
list.getAt(1); 
// returns node with data 'a'
```

</td>

</tr>

<tr>

<td>insertAt</td>

<td>(Data, integer)</td>

<td>-</td>

<td>Create an insert a new node at provided index. If index is out of bounds, add the node to the end of the list.</td>

<td>

```
const list = new List();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.insertAt('Hi', 1)
list.getAt(1); 
// returns node with data 'Hi'
```

</td>

</tr>

<tr>

<td>forEach</td>

<td>(function)</td>

<td>-</td>

<td>Calls the provided function with every node of the chain</td>

<td>

```
const list = new List();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

list.forEach(node => {
  node.data += 10;
});
list.getAt(0); 
// Returns node with data '11'
```

</td>

</tr>

<tr>

<td>for...of Loop</td>

<td>-</td>

<td>-</td>

<td>Linked list should be compatible as the subject of a 'for...of' loop</td>

<td>

```
const list = new List();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

for (let node of list) {
  node.data += 10;
}

node.getAt(1); 
// returns node with data 11
```

</td>

</tr>

</tbody>

</table>