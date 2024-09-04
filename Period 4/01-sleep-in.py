def sleep_in(weekday, vacation):
    #cherry's solution
#     if weekday == False:
#         return True
#     elif vacation == True:
#         return True
#     else:
#         return False

    #michael's solution
#     if vacation == True or weekday == False:
#         return True
#     else:
#         return False

    #calixx's solution
#     if weekday == True and vacation == False:
#         return False
#     return True
        
    #nicest solution
    return vacation == True or weekday == False
    
print(sleep_in(False, False))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(True, True))
