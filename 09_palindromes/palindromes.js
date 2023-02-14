const palindromes = function (text) {
    let flatten = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replaceAll(' ', '');
    let lower = flatten.toLowerCase();
    
    var splitString = lower.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    if (lower === joinArray) {
        return true;
    }
    return false;
};

console.log(palindromes("Rats live on no evil star."));

// Do not edit below this line
module.exports = palindromes;
