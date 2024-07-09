let categoryWrapper = document.querySelector('#category');
let formWrapper = document.querySelector('#form')

categoryWrapper.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target.tagName == 'LI') {
    window.location.href = '/' + e.target.id
  }
})

formWrapper.addEventListener('keyup', (e) => {
  if(e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
})