function fromLast(list, n) {
  let slow = list.head, fast = list.head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  
  return slow;
}

module.exports = fromLast;
