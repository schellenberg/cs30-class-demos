def sleep_in(weekday, vacation):
    return vacation == True or weekday == False
    
#     if vacation == False:
#         if weekday == True:
#             return False
#         return True
#     return True


print( sleep_in(True, True))
print( sleep_in(True, False))
print( sleep_in(False, True))
print( sleep_in(False, False))


