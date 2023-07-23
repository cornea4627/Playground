def write_to_file(content):
    with open('textfile.txt', 'a') as file:
        file.write(content + "\n" )

def read_file():
    with open('textfile.txt', 'r') as file:
        contents = file.read()
        print(contents)

x = input("What you want bro!? ")

write_to_file(x)

read_file()
