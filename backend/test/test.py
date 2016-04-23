import requests

url = 'http://localhost:8080/trips/'

def listAll():
    return requests.get(url).text

def createNew(name, price, description):
    return requests.post(url, data = {'name': name, 'price': price, 'description': description}).text

def getTrip(id):
    return requests.get(url+id).text

def updateTrip(id, name, price, description):
    return requests.put(url+id, data = {'name': name, 'price': price, 'description': description}).text

def delTrip(id):
    return requests.delete(url+id).text

print "All Trip: " + listAll() + '\n'

#print createNew("aaa", 100, 'one')
#print createNew("bbb", 200, 'two')
#print createNew("ccc", 300, 'three')

id = "571b6463be7ea07e3aa27ef9"

print "list: " + getTrip(id)

#print updateTrip(id, "hello", 9999, 'world')

#print "list: " + getTrip(id)

print delTrip(id)

print "All Trip: " + listAll() + '\n'

