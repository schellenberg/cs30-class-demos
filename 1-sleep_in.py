def sleep_in(weekday, vacation):
    return not (weekday == True and vacation == False)

print( sleep_in(True, True))
print( sleep_in(True, False))
print( sleep_in(False, True))
print( sleep_in(False, False))
