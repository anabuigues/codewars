function parseF(s) {
    var result = parseFloat(s);

    if(Number.isNaN(result)){
        result = null;
    }
    return result;
}