const fibonacci = function(num) {

    if (num < 1) return "OOPS"; //doesn't accept negatives

    let array = [1, 1];

    for (i=2; i<(num+2); i++){
        array.push(array[i-1] + array[i-2]);
    }

    return array[num-1];
};

console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
