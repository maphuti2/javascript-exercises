const removeFromArray = function(array , ...arg) {
    let fixedArray = [];
    for (let x of array){
        if (!arg.includes(x)){
            fixedArray.push(x);
        }
    }

    return fixedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
