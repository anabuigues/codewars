function spinWords(text){
    var array = text.split(" ");

    for (var word in array){
        if (array[word].length > 4){
            array[word] = array[word].split('').reverse().join('');
        }
    }

    return array.join(" ");
}