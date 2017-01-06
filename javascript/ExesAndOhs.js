function XO(str) {
    str=str.toLowerCase();
    var num_o=0;
    var num_x=0;
    var i=0;

    while(i<str.length)
    {
        if(str[i]==='o')
        {
            num_o++;
        }
        else if(str[i]==='x')
        {
            num_x++;
        }
        i++;
    }

    if(num_x===num_o)
    {
        return true;
    }
    else
    {
        return false;
    }
}