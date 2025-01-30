def sum_double(a, b):
    #khoi's solution
    if a == b:
        sum = a * 2 + b * 2
    else:
        sum = a + b
    return sum
    
    #luke's solution
    if a == b:
        return 2 * (a + b)
    else:
        return a + b
    
    #judah's solution
    if a != b:
        return a + b
    return 2 * (a + b)
    
print(sum_double(1, 2)) #3
print(sum_double(3, 2)) #5
print(sum_double(2, 2)) #8