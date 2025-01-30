def sleep_in(weekday, vacation):
    #kamal's version wrecked by Schellenberg
    if vacation == True or weekday == False:
        return True
    else:
        return False
    
    #kamal's version
    if vacation or not weekday:
        return True
    else:
        return False
    
    #laeron's solution
    return vacation or not weekday
    
print(sleep_in(False, False)) #T
print(sleep_in(True, False))  #F
print(sleep_in(False, True))  #T
print(sleep_in(True, True))   #T
