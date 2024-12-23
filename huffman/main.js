const fs = require("fs");

const encode = require("./huffman_encoding");
const decode = require("./huffman_decoding");
const { frequencies, buildHuffmanTree, buildEncodingTable } = require("./utils");

function test() {
  const input = process.argv.slice(3).join(" ");

  console.log("INPUT STRING: " + input);

  const tree = buildHuffmanTree(frequencies(input));
  const encodingTable = buildEncodingTable(tree);

  console.log("EncodingTable: ", encodingTable);

  const encode_result = encode(encodingTable, input);

  const codeToSymbol = {};

  for (let key in encodingTable) {
    codeToSymbol[encodingTable[key]] = key;
  }

  const decode_result = decode(codeToSymbol, encode_result);

  console.log("ENCODE STRING: " + encode_result);
  console.log("DECODE STRING: " + decode_result);
}

function test_encode() {
  const input = process.argv.slice(3).join(" ");

  console.log("INPUT STRING: " + input);

  const tree = buildHuffmanTree(frequencies(input));
  const encodingTable = buildEncodingTable(tree);

  const encode_result = encode(encodingTable, input);

  console.log("ENCODE STRING: " + encode_result);
}

function test_decode() {
  const data = fs.readFileSync(__dirname + "/decode", "utf8");

  const lines = data.trim().split('\n');
    
  const numSymbols = lines[0].split(' ').map(Number)[0];
  
  const codeToSymbol = {};
  for (let i = 1; i <= numSymbols; i++) {
    const [symbol, code] = lines[i].split(': ');
    const cleanSymbol = symbol.trim().replace(/'/g, ''); 
    codeToSymbol[code] = cleanSymbol;
  }
  
  const encodedString = lines[numSymbols + 1];

  console.log("INPUT: " + data);

  const decode_result = decode(codeToSymbol, encodedString);

  console.log("DECODE STRING: " + decode_result);
}

function main() {
  const command = process.argv[2];

  if (command === "encode") {
    test_encode();
  } else if (command === "decode") {
    test_decode();
  } else if (command === "test") {
    test();
  } else {
    console.log("Unknown command");
    process.exit(1);
  }

  process.exit(0);
}

main();
