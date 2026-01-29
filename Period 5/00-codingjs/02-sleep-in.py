def sleep_in(weekday, vacation):
    #harjot's solution
#     if weekday == False or vacation == True:
#         return True
#     else:
#         return False
    
    #vivaan's solution
#     if weekday == True and vacation == False:
#         return False
#     else:
#         return True

    #in between solution
#     return weekday == False or vacation == True

    #yet one more
#     return not weekday == True or vacation == True

    #zichen's solution
    return vacation or not weekday
    
print(sleep_in(False, False))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(True, True))