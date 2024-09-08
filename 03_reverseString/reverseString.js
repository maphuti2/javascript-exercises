const reverseString = function(name) {
    let sentence = '';
    for (let x = name.length -1; x >= 0; x--){
        sentence += name[x];
    }
    return sentence;
}

// Do not edit below this line
module.exports = reverseString;
