def longest_palindrome (s):
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