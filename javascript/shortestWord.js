function findShort(s) {
    var array = s.split(" ");

    array.sort(function (a, b) {
        return a.length - b.length;
    });

    return array[0].length

}
