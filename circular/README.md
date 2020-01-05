### Problem

#### Given a linked list, return true if the list is circular, false if it is not.

### Example
```
const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  circular(l) // true
```
