book = {
    'title': 'Frankenstein',
    'author': 'Mary Shelley',
    'year': '1818'
}

def writeout():
    print(book['title'], ", written by ", book['author'], " was published in ", book['year'])
    for x in book:
        print(x,":", book[x])

writeout()
