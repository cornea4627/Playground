class Person:
    def __init__(self, parameter1, parameter2):
        self.name = parameter1
        self.age = parameter2
    
    def changeName(self):
        newname = input("Please enter your desired name: ")
        self.name = newname
        print("Confirmed, your new name is:", self.name)

l= Person("James", 1)

print("My name is", l.name, "and I am", l.age, "years old")

l.changeName()