const palindromes = function (str) {
    let newStr = "";
    for(let i = 0; i < str.length; ++i){
        let code = str.charCodeAt(i);
        if((code > 47 && code < 58) ||
            (code > 64 && code < 91) ||
            (code >96 && code < 123))
                newStr += str[i];
    }
    newStr = newStr.toLowerCase();
    let end = newStr.length - 1;
    let start = 0;
    while(start <= end){
        if(newStr[end] != newStr[start])
            return false;
        start++;
        end--
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
