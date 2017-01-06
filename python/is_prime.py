def is_prime(num):
    num = abs(num)
    if num >= 2:
        for y in range(2, num):
            if not (num % y):
                return False
    else:
        return False
    return True