function solution(number){
    var counter  = 0;

    for (var i = 0; i < number; i++) {
        if (i%15 == 0) {
            counter += i;
        }else if (i%3 == 0) {
            counter += i;
        } else if (i%5 == 0) {
            counter += i;
        }
    }

    return counter;
}