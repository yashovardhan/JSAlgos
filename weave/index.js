const Queue = require('./queue');

function weave(source1, source2) {
  const q = new Queue();

  while(source1.peek() || source2.peek()) {
    if (source1.peek()) {
      q.add(source1.remove());
    }

    if(source2.peek()) {
      q.add(source2.remove());
    }
  }

  return q;
}

module.exports = weave;
