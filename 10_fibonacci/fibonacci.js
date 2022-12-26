const fibonacci = function(num) {
    num = parseInt(num);
    if(num <= 0)
        return "OOPS";
    if(num <= 2 && num >= 1)
        return 1;
    let previous = 1;
    let prePrevious = 1;
    let current = 2;
    let count = 3;
    while(count < num){
        current = current + previous;
        prePrevious = previous;
        previous = current - previous;
        count++;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
