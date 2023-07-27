import json
uncle = {"name": "Rick", "age": 45, "city": "New York"}
# print(json.dumps(uncle))

x = json.dumps(uncle)
print(x)

print(json.loads(x))