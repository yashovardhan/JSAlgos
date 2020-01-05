function midpoint(list) {
  let slow = list.head, fast = list.head;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

module.exports = midpoint;
