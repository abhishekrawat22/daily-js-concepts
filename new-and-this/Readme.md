In JavaScript, both new and this are fundamental concepts, especially when dealing with object-oriented programming. Here's a breakdown of their differences and how they are used:

# new keyword
The new keyword is used to create an instance of an object that has a constructor function. When you use new, it does the following:
- Creates a new empty object.
- Sets the prototype of the new object to the constructor's prototype.
- Binds this to the newly created object inside the constructor function.
- Returns the new object unless the constructor returns a non-primitive value explicitly.

# this keyword
The this keyword refers to the context in which a function is called. Its value is determined by how a function is called. Here are the different contexts where this can be used:

- **Global context:** When used in the global scope, this refers to the global object (e.g., window in browsers).
- **Object method context:** When used in a method of an object, this refers to the object itself.
- **Constructor function context:** When used in a constructor function (with new), this refers to the new instance being created.
- **Event handlers:** When used in event handlers, this refers to the element that received the event.
- **Arrow functions:** Arrow functions do not have their own this; they inherit this from the surrounding lexical context.
