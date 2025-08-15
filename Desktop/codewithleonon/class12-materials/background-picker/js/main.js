
document.getElementById('purple').onclick = partyPurple
document.getElementById('yellow').onclick = yellow
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('pink').onclick = pink
document.getElementById('red').onclick = red



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function yellow(){
  document.querySelector('body').style.backgroundColor = 'yellow'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function pink(){
  document.querySelector('body').style.backgroundColor ='pink'
  document.querySelector('body').style.color = 'white'
}

function red(){
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('body').style.color = 'blue'
}

