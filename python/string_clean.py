from string import digits

def string_clean(s):
    return s.translate(None, digits)

