function frequencies(s) {
  const frequencyMap = s.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequencyMap);
}

class Node {
  constructor(value, frequency, left = null, right = null) {
    this.value = value;
    this.frequency = frequency;
    this.left = left;
    this.right = right;
  }
}

function buildHuffmanTree(frequencies) {
  if (frequencies.length <= 1) return null;

  const nodes = frequencies
    .map(([value, frequency]) => new Node(value, frequency))
    .sort((a, b) => a.frequency - b.frequency);

  while (nodes.length > 1) {
    const left = nodes.shift();
    const right = nodes.shift();

    const parentNode = new Node(null, left.frequency + right.frequency, left, right);

    nodes.push(parentNode);
    nodes.sort((a, b) => a.frequency - b.frequency);
  }

  return nodes[0];
}

function buildEncodingTable(tree) {
  const table = {};

  function traverse(node, path) {
    if (node.value !== null) {
      table[node.value] = path;
    } else {
      traverse(node.left, path + "0");
      traverse(node.right, path + "1");
    }
  }

  traverse(tree, "");
  return table;
}

module.exports = {
  frequencies,
  buildHuffmanTree,
  buildEncodingTable,
};
