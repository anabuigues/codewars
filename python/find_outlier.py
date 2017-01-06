def find_outlier(integers):
    parities = [n & 1 for n in integers]
    return integers[parities.index((parities[0] in parities[1:3]) ^ parities[0])]