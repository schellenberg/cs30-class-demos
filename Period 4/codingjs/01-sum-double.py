def sum_double(a, b):
    #calixx's solution
#     if a == b:
#         return (a+b)*2
#     else:
#         return a+b
    
    #omar's solution
#     if a == b:
#         return a*4
#     return a + b
    
    #nialan's solution
    return (a+b)*(1+(a==b))
    
print(sum_double(1, 2))
print(sum_double(3, 2))
print(sum_double(2, 2))
