let fullName = {
    firstName: 'Abhishek',
    lastName: 'Rawat',
    printFullName = function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

fullName.printFullName();

let name2 = {
    firstName: 'Rohit',
    lastName: 'Rawat'
}

// Function Borrowing
fullName.printFullName.call(name2) // Where do you want the 'this' inside printFullname to point to.


// We can also declare the function outside
const printFullName = function() {
    console.log(this.firstName + " " + this.lastName);
}

// then
printFullName.call(fullName);
printFullName.call(name2);

// If there are other parameters to be passed in the function too
const printFullName2 = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + hometown + state);
}

printFullName2.call(name2, 'Mumbai', "MH");

// Apply method
printFullName2.apply(name2, ['Mumbai', "MH"]); // second arg as an array list

//bind method
let printMyName = printFullName.bind(name2, 'Mumbai')
// bind method binds the func to an object and returns the copy of that method/func to be called later.
printMyName("MH")
