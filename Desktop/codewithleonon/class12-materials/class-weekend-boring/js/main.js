document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').textContent = 'Yay! It\'s a class day !';
  } else if (day === 'Saturday' || day === 'Sunday') {
    document.querySelector('#placeToSee').textContent = 'Yay! It\'s the weekend!';
  } else {
    document.querySelector('#placeToSee').textContent = 'Boo! It\'s a weekday.';
  }

}
