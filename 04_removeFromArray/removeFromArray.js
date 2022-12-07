const removeFromArray = function(array, ...argument) {
    let markArray = [];
    for(let i = 0; i < array.length; ++i)
        markArray.push(0);
    for(let i = 0; i < argument.length; ++i){
        for(let j = 0; j < array.length; ++j)
            if(argument[i] === array[j])
                markArray[j] = 1;
    }

    let result = [];
    for(let i = 0; i < array.length; ++i)
        if(markArray[i] == 0)
            result.push(array[i]);
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
