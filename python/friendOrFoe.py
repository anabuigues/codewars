def friend(x):
    names = []
    for name in x:
        if len(name) == 4:
            names.append(name)

    return names