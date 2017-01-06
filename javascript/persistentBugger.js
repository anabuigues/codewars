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