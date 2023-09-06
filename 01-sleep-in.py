def sleep_in(weekday, vacation):
    #Robert's
    return not weekday or vacation
    
    # Robert's mangled
#     return weekday == False or vacation == True
    
    #Gabe's
#     if weekday == False or vacation == True:
#         return True
#     else:
#         return False
    
    #Nohl
#     if vacation == True:
#         return True
#     elif weekday == False:
#         return True
#     else:
#         return False
    

    


print(sleep_in(False, False))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(True, True))