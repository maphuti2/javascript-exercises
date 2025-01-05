const fibonacci = function(n) {
    const valueNum = Number(n);
    let numbers = [1,1];


    if (valueNum === 0){
        return valueNum;
    }

    if (valueNum < 0){
        return `OOPS`;
    }

    for (let x = 2; x < valueNum; x++){
        let nextNum = numbers[x - 1] + numbers[x - 2];
        numbers.push(nextNum);
    }

    return numbers[valueNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
