function decode(codeToSymbol, encodedString) {    
    let decodedString = '';
    let tempCode = '';
  
    for (const bit of encodedString) {
      tempCode += bit; 
      
      if (tempCode in codeToSymbol) {
        decodedString += codeToSymbol[tempCode]; 
        tempCode = ''; 
      }
    }
  
    return decodedString;
}

module.exports = decode;
