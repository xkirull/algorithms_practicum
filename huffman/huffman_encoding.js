function encode(encodingTable, s) {
    return s.split("").map(char => encodingTable[char]).join("");
}

module.exports = encode;
