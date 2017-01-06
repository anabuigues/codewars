var uniqueInOrder=function(iterable){

    var array = [];
    var result = [];
    if(typeof iterable === "string"){
        array = iterable.split("");
    }else{
        array = iterable;
    }
    alert(array);
    for (var i = 0; i < array.length; i++) {
        if(array[i]!==array[i+1]){
            result.push(iterable[i])
        }
    }

    return result;
};