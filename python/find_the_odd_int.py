def find_it(seq):
    dict = {}
    for number in seq:
        if number in dict:
            value = int(dict.get(number))
            value += 1
            dict[number] = value
        else:
            dict[number] = 1

    for number in dict:
        if int(dict.get(number)) & 1 == 1:
            return number

