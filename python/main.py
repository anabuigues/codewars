def find_it(seq):
    dict = {}
    for number in seq:
        if number in dict:
            value = int(dict.get(number))
            value = value +1
            dict[number] = value
        else:
            dict[number] = 1

    for number in dict:
        if int(dict.get(number)) & 1 == 1:
            return number

def duplicate_count(text):
    array = list(text.lower().replace(" ", ""))
    my_dict = {i: array.count(i) for i in array}
    letters = 0
    for letter in my_dict:
        if my_dict.get(letter) > 1:
            letters += 1

    return letters

def is_prime(num):
    num = abs(num)
    if num >= 2:
        for y in range(2, num):
            if not (num % y):
                return False
    else:
        return False
    return True


def Descending_Order(num):
    array = list(str(num))
    array.sort(reverse=True)
    return "".join(array)

def alphabet_position(text):
    alphabet = list('abcdefghijklmnopqrstuvwxyz')
    text = text.lower().replace(" ","")
    result = ''
    for i in text:
        if i.isalpha():
            result += str(alphabet.index(i) + 1) + ' '
    return result[0:len(result) - 1]

def longest_palindrome(s):
    results = []

    for i in range(len(s)):
        for j in range(0, i):
            chunk = s[j:i + 1]

            if chunk == chunk[::-1]:
                results.append(chunk)

    if len(results) > 0:
        return len(max(results, key=len))
    elif len(s) == 0:
        return 0
    else:
        return 1

def main():

    print(longest_palindrome("a"))
    print(longest_palindrome("aa"))
    print(longest_palindrome("baa"))
    print(longest_palindrome("aab"))
    print(longest_palindrome("abcdefghba"))
    print(longest_palindrome("baablkj12345432133d"))


if __name__ == "__main__": main()