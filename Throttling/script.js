let count = 0;
function expensive() {
  console.log('typed ', count++, ' times')
}

//  call every after limit time.
const throttle = function(fn, limit) {
  let flag = true;
  return function() {
    let context = this,
    args = arguments; // if fn have arguments
    if(flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  }
}

const betterFunction = throttle(expensive, 3000); 