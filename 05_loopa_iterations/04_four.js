// /Iterates over the keys (or property names) of an object.
//Returns: Keys/Property names.

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python',
    kt: 'kotlin'
}

for (const key in myObject) {
    //console.log(key); //js,c++,py,kt ->key
    //console.log(myObject[key]); //javascript, c++.. ->value
    console.log(`${key} for ${myObject[key]}`);
    // key  for value
    // js   for javascript
    // cpp  for c++
    // py   for python
    // kt   for kotlin
    
}

const programming = ["js", "cpp", "py", "java"]
for (const key in programming) {
    //console.log(key);
    console.log(programming[key]);
    
    
}

// Key Differences
//Returns: Keys/Property names.
//Use Case: Best for iterating over the properties of an object.
//Note: For arrays, it iterates over indices (keys) which is generally less useful. It’s better to use for...of for arrays.

//for...of:

//Returns: Values of the iterable object.
//Use Case: Best for iterating over values of arrays, strings, or other iterable collections.

//for...in: Iterates over the keys of an object (or array indices) and is suited for objects.
//for...of: Iterates over the values of an iterable object like arrays, strings, maps, and sets, and is suited for collections where you need the values directly.