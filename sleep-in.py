def sleep_in(weekday, vacation):
#    if vacation == True:
#        return True
#    elif weekday == False:
#        return True
#    else:
#        return False
    return vacation or not weekday
    
print(sleep_in(True, True))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(False, False))