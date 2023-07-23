import requests


values = (requests.get("https://jsonplaceholder.typicode.com/posts")).json()

print(values[0])
print(values[0]['title'])



# i = 1
# for items in values:
    
#     print(i, items['title'])
#     i += 1

#     if i == 4:
#         break