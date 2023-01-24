const sumAll = function(first_number, second_number) {

    let start = 0;
    let end = 0;

    if (first_number < 0 || second_number < 0 || typeof first_number != 'number' || typeof second_number != 'number') {
        return 'ERROR'
    }

    if (first_number > second_number) {
        start = second_number;
        end = first_number;
    } else {
        start = first_number;
        end = second_number;
    }

    let num = 0;

    for (i=start; i<=end; i++) {
        num += i;
    }

    return num;

};

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
