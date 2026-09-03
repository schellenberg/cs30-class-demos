def sleep_in(weekday, vacation):
    #Ryley
#     if weekday == False:
#         return True
#     elif vacation == True:
#         return True
#     else:
#         return False
    
    #Theo
#     if weekday == False or vacation == True:
#         return True
#     else:
#         return False

    #James and Luca
#     if not weekday or vacation:
#         return True
#     else:
#         return False
    
    #Asher
    return not weekday or vacation

print(sleep_in(True, True))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(False, False))
