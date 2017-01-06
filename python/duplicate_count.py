def duplicate_count(text):
    array = list(text.lower())
    my_dict = {i: array.count(i) for i in array}
    letters = 0
    for letter in my_dict:
        if my_dict.get(letter) > 1:
            letters += 1

    return letters

