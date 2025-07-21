let stars = document.getElementById('star-rating');
let selectedRating = 0;

stars.addEventListener('click', function(event) {
  if (event.target.classList.contains('star')) {
    selectedRating = parseInt(event.target.getAttribute('data-value'), 10);

    for (let i = 0; i < stars.children.length; i++) {
      if (i < selectedRating) {
        stars.children[i].classList.add('selected');
      } else {
        stars.children[i].classList.remove('selected');
      }
    }
  }
});

stars.addEventListener('mouseover', function(event) {
  if (event.target.classList.contains('star')) {
    let rating = parseInt(event.target.getAttribute('data-value'), 10);

    for (let i = 0; i < stars.children.length; i++) {
      if (i < rating) {
        stars.children[i].classList.add('selected');
      } else {
        stars.children[i].classList.remove('selected');
      }
    }
  }
});

stars.addEventListener('mouseout', function() {
  for (let i = 0; i < stars.children.length; i++) {
    if (i < selectedRating) {
      stars.children[i].classList.add('selected');
    } else {
      stars.children[i].classList.remove('selected');
    }
  }
});