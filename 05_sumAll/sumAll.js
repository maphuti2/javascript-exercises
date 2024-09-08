const sumAll = function(first, second) {
    let num1 = first;
    let num2 = second;
    let sum = 0;

    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        sum = 'ERROR';
    }
    else if (num1>num2){
        for (num1;num1>=num2; num1--){
            sum += num1;
        }
    }
    
    else {
        for (num1;num1<=num2; num1++){
            sum += num1;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
