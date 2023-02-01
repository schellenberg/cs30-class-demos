def sum_double(a, b):
    #will's solution
    if a == b:
        return (a + b) * 2
    else:
        return (a + b)
    
    #ben's
#     return [a + b, 2*(a+b)][a==b]
print(sum_double(1, 2))
print(sum_double(3, 2))
print(sum_double(2, 2))