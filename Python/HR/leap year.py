def is_leap(year):
    leap = False
    
    # Write your logic here
    if year % 4 == 0:#(year % 100 == 0 and year % 400 == 0):
        if year % 100 == 0:
            if year % 400 == 0:
                leap = True
            else:
                leap = False
        else:
            leap = True
    else:
        leap = False
    
    return leap

# year = int(input())
year = 2011
print(is_leap(year))