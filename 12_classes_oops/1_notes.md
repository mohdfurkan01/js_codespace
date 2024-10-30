# JavaScript and classes

##OOPs

# Object

-collection of properties and methods
(properties-> data and variables)
(methods-> functions)
-toLowerCase

## Part of OOP

Object literal

-Constructor function (it gives a new instance every time)
-Prototypes
-Classes
-Instances (new, this)

## -Prototypes

When we try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it goes up the chain (the prototype chain) to the object's prototype. If it's not there, it keeps going up the chain until it reaches the root object (which is null).

when it comes to make our own method using [prototype] then if we apply any new prototype method in [OBJECTS] then it will work for all the [FUNCTIONS] [ARRAYS] [STRINGS] because it they all are passing through object {see 'prototype.img'} that's why all are working as expected.

But when it comes to any specific like if we add any mehtod prototype only in array then it will only in array not object if you apply it will give an error like this '//heroPowerObj.heyfurkan();' //TypeError: heroPowerObj.heyfurkan is not a function.

By adding methods to Object.prototype, you're ensuring that all objects can access the method.

By adding methods to Array.prototype, you're restricting the method to be accessible only by arrays.

Similarly, adding methods to String.prototype allows only strings to use those methods.

## 4 pillars

Abstraction
Encapsulation
Inheritance
Poymorphism
