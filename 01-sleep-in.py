def sleep_in(weekday, vacation):
    #Hanson's solution
    #return vacation or not weekday
    
    #Bennett's solution
#     if vacation or not weekday:
#         return True
#     else:
#         return False
    
    #Muhammad's solution
#     if weekday == True and vacation == False:
#         return False
#     else:
#         return True
        
    
    #Aaraiz's solution
#     if vacation == True:
#         return True
#     if vacation != True and weekday == True:
#         return False
#     if vacation != True and weekday != True:
#         return True
    

print(sleep_in(True, True))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(False, False))
