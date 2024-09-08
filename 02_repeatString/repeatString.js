const repeatString = function(name, number) {
     let word = '';
     if (number < 0){
        word = 'ERROR';
     }
    for (let x = 0; x < number; x++){
        word += name;
    }

    return word;
};

// Do not edit below this line
module.exports = repeatString;
