let count = 0;
function getData() {
  console.log('typed ', count++, ' times')
}

//  call only when time between two key pressed is greater than d.
const doSomeMagic = function(fn, d) {
  let timer;
  return function() {
    let context = this,
      args = arguments;
      // to stop calling this method when again a key is pressed we should clear this timeout and for which we will store setTiemout in a variabvle
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args); //to fix 'this' variable and context
    }, d);
  }
}

const betterFunction = doSomeMagic(getData, 300);