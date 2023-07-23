class Person:
    def __init__(self, parameter1, parameter2):
        self.name = parameter1
        self.age = parameter2
    
    def enterAttributes(self):
        self.name = input("Please enter your name: ")
        self.age = int(input("Please enter your age: "))

    
    def changeName(self):
        newname = input("Please enter your desired name: ")
        self.name = newname
        print("Confirmed, your new name is:", self.name)

l= Person("", 0)
l.enterAttributes()

if l.age == 1:
    print("My name is", l.name, "and I am", l.age, "year old")
else:
    print("My name is", l.name, "and I am", l.age, "years old")


l.changeName()