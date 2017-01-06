def getCount(inputStr):
    num_vowels = 0
    for char in inputStr:
        if char in "aeiou":
            num_vowels +=1

    return num_vowels

