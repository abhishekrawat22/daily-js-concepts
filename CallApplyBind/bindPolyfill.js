let wholeName = {
  firstName: 'Abhishek',
  lastName: 'Rawat'
}

const printFullName = function() {
  console.log(this.firstName + " " + this.lastName);
}

// if we keep any method in function.prototype then each and every method what we write has access to those methods.
Function.prototype.myBind = function(...args) {
  let obj = this; //pointing to the printFullName here.
  let params = args.slice(1); // will remove the first argument and return the rest.
  // will return a func.
  return function(...args2) { // args2 to pass the third value from the new function created using bind method.
    obj.call(args[0]); // args[0] here is wholeName
    // as params will be an array, so:
    // obj.apply(args[0], params);
    // obj.apply(args[0], [...params, ...args2]) // will concatenate both arrays
  }
}

let printMyName = printFullName.myBind(wholeName);
printMyName()