def sleep_in(weekday, vacation):
    # lacon's solution
#     if weekday == False:
#         return True
#     elif vacation == True and weekday == True:
#         return True
#     else:
#         return False

    #afrukhta's solution
#     if weekday == False or vacation == True:
#         return True
#     else:
#         return False

    #explanation
#     return weekday == False or vacation == True

    # dracen's solution
#     return (not weekday) or vacation
    
print(sleep_in(False, False)) #true
print(sleep_in(True, False))  #false
print(sleep_in(False, True))  #true
print(sleep_in(True, True))   #true