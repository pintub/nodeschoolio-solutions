let petArray = ['cat', 'dog', 'rat']

for (const key in petArray) {
    petArray[key] = petArray[key] + 's' 
}

console.log(petArray)