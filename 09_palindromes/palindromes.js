const palindromes = function (words) {
    const originWord = words.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = originWord.split('').reverse().join('');

    return originWord === reversedWord;
};


// Do not edit below this line
module.exports = palindromes;
