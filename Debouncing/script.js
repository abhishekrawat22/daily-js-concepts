let count = 0;
function getData() {
  console.log('typed ', count++, ' times')
}

//  call only when the time between two keys pressed is greater than d.
const doSomeMagic = function(fn, d) {
  let timer; // As we have to clearTimeout first and the actual function is initialized after that
  return function() {
    let context = this,
      args = arguments;
      //To stop calling this method when again a key is pressed we should clear this timeout for which we will store setTimeout in a variable
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args); //to fix 'this' variable and context
    }, d);
  }
}

const betterFunction = doSomeMagic(getData, 300);
