
// Syntax
// Element.addEventListener('click', () => {

// }, userCapture)

//  userCapture a boolean will trigger event capturing when true value is set and event bubbling(a default event) when false or nothing is set.

 document.querySelector('#grandparent').addEventListener('click', () => {
  console.log('grandparent clicked')
 }, true)

 document.querySelector('#parent').addEventListener('click', (e) => {
  console.log('parent clicked')
  e.stopPropagation()
 }, false)

 document.querySelector('#child').addEventListener('click', () => {
  console.log('child  clicked')
 }, true)

//   parent will not be captured in the capturing cycle which started first, but later
//  therefore grandparent > child > parent(or till the child on which we clicked)