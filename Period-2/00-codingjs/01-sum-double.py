def sum_double(a, b):
    #emmett's solution
    if a != b:
        return a + b
    else:
        return 2 * (a + b)
    
    #pak's solution
#     the_sum = 0
#     if a == b:
#         the_sum = 4 * a
#     else:
#         the_sum = a + b
#     return the_sum   
    
print(sum_double(1, 2))
print(sum_double(3, 2))
print(sum_double(2, 2))