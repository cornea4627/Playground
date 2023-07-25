def factorial(n):
    if n == 1:
        result = 1
        return result
    elif n == 0:
        return 1
    elif n < 0:
        print("Negative numbers not allowed")
    else:
        result = n * factorial(n-1)
        return result

print(factorial(5))