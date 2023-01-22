const reverseString = function(string) {
    
    let forwardArray = string.split('');
    let backwardArray = [];

    for (i = forwardArray.length; i >= 0; i--) {
        backwardArray.push(forwardArray[i]);
    }

    backwardArray.shift(); //remove undefined element from beginning

    let backwardoutput = backwardArray.join("");

    return backwardoutput;

};

console.log(reverseString('test'));

// Do not edit below this line
module.exports = reverseString;
