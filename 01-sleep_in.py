def sleep_in(weekday, vacation):
    return not weekday or vacation

#     if not weekday or vacation:
#         return True
#     else:
#         return False 
    
#     if weekday == False or vacation == True:
#         return True
#     else:
#         return False 

print(sleep_in(True, True))
print(sleep_in(True, False))
print(sleep_in(False, True))
print(sleep_in(False, False))

