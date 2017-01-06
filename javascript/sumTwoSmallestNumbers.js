function sumTwoSmallestNumbers(numbers) {

    var numbersSort = numbers.slice();
    numbersSort.sort(sortNumber);
    return numbersSort[0] + numbersSort[1]

}

function sortNumber(a,b) {
    return a - b;
}