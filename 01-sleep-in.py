def sleep_in(weekday, vacation):
    return not weekday or vacation

    #better still, but not best
#     if weekday and not vacation:
#         return False
#     return True
    
    #better, but not quite best
#     if weekday == True and vacation == False:
#         return False
#     else:
#         return True
    
    #one option, but we can do better...
#     if weekday == False:
#         return True
#     if weekday == True and vacation == True:
#         return True
#     else:
#         return False
       
    
print(sleep_in(False, False))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(True, True))