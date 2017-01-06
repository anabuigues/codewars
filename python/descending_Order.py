def Descending_Order(num):
    array = list(str(num))
    array.sort(reverse=True)
    return int("".join(array))