def sum_double(a, b):
    #artin's solution
#     if a == b:
#         the_sum = a + b
#         the_sum = the_sum * 2
#     else:
#         the_sum = a + b
#     return the_sum
    
    #stephen's solution
#     c = a + b
#     if a == b:
#         c = c * 2
#     return c

    #zichen's solution
#     if a == b:
#         return 2 * (a + b)
#     else:
#         return a + b

    #albert's solution
    if a == b:
        return a * 4
    return a + b

print(sum_double(1, 2))
print(sum_double(3, 2))
print(sum_double(2, 2))