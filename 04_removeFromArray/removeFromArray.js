const removeFromArray = function() {

    let arrayInput = arguments[0];

    let newArray = [];

    outer:
    for (i=0; i <= arrayInput.length; i++) {
        
        for (j=1; j <= arguments.length; j++) {

            if (arrayInput[i] === arguments[j]) {
                continue outer;
            }

        }
        
        newArray.push(arrayInput[i]);
    }   

    return newArray;

}


let test = [1, 2, 3, 4];

console.log(removeFromArray(test, 1, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
