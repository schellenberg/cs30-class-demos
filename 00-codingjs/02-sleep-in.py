def sleep_in(weekday, vacation):
    #albert's solution
#     if not weekday or vacation:
#         return True
#     else:
#         return False

    #amy's solution
    return not weekday or vacation
    
    #vijeta's solution
#     if vacation == True:
#         return True
#     elif weekday == False and vacation == False:
#         return True
#     else:
#         return False 
    
    #dmitrii's solution
#     if not weekday or vacation:
#         return True
#     return False

    
    
print(sleep_in(False, False))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(True, True))