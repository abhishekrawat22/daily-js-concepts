First thing to keep in mind here is that each and every function in JavaScript has an access to a **this** keyword.

# Call Method
- **Function borrowing:** Method borrowing, also known as function borrowing, is, as its name implies, a way for an object to use the methods of another object without redefining that same method. In JavaScript, we can reuse the method of a function on a different object other than the object it was defined on.
- **Call method:** The call() method is used to borrow the method of one object in another object.
- **Apply method:** The apply() method does the same work except that it takes the arguments in an array form.
- **Bind method:** It binds the function to an object and returns the copy of that method/func to be called later by creating a new function from an existing one.

There are many benefits to method borrowing:
- It prevents the unnecessary duplication of code.
-It allows the user to use methods of different objects without inheriting.
- Using method borrowing prevents the replication of methods in multiple object blocks and saves time.