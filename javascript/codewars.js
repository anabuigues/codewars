
function findShort(s) {
    var array = s.split(" ");

    array.sort(function (a, b) {
        return a.length - b.length;
    });

    return array[0].length

}

function filter_list(l) {
    var result = [];

    for (i = 0; i < l.length; i++) {
        if(typeof l[i] !== "string"){
            result.push(l[i]);
        }
    }

    return result;
}

var countBits = function(n) {
    return n.toString(2).split('1').length-1;
}

function createPhoneNumber(numbers){
    var m = numbers.join("").match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

function persistence(num) {
    num=num.toString();
    var count=0;
    while(num.length!==1)
    {
        var prod=1;
        var i=0;
        while(i<num.length)
        {
            prod*=parseInt(num[i]);
            i++;
        }
        num=prod.toString();
        count++;
    }
    return count;
}

function solution(number){
    var counter  = 0;

    for (var i = 0; i < number; i++) {
        if (i%15 == 0) {
            counter ++;
        }else if (i%3 == 0) {
            counter++;
        } else if (i%5 == 0) {
            counter++;
        }
    }

    return counter;

}

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

function zeros (n) {

}

function likes(names) {
    if (names.length == 0){
        return "no one likes this";
    }else if (names.length == 1){
        return names[0] + " likes this";
    }else if (names.length == 2){
        return names[0] + " and " + names[1] + " like this"
    }else if (names.length == 3){
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    }else{
        alert("pasa por aqui");
        return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
    }
}










