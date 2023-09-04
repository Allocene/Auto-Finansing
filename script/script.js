//burger menu
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".header_burger");
  const menu = document.querySelector(".header_menu");
  const body = document.querySelector("body");

  burger.addEventListener("click", function(e) {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
});

//open/close modal window
const openModalBtns = document.getElementsByClassName('openModalBtn');
const modalOverlay = document.querySelector('.modal-overlay');
const submit = document.getElementById('submit');
const successMessage = document.querySelector('.success-message');
const failMessage = document.querySelector('.fail-message');
const body = document.querySelector("body");

for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener('click', function() {
        modalOverlay.style.display = 'flex';
        body.classList.toggle("lock");
    });
}

modalOverlay.addEventListener('click', function(click) {
    if (click.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        body.classList.toggle("lock");
    }
});

submit.addEventListener('click', function(event) {
  event.preventDefault(); // Stop standart behav field
  
  // inspect valid field
  if (isFormValid()) {
    successMessage.style.display = 'block'; // Show success message


     setTimeout(function() {
      modalOverlay.style.display = 'none';
      successMessage.style.display = 'none';
      body.classList.toggle("lock");
    }, 2000)
  }

  if (!isFormValid()) {
    failMessage.style.display = 'block'; // Show fail message


    setTimeout(function() {
      modalOverlay.style.display = 'none';
      failMessage.style.display = 'none';
      body.classList.toggle("lock");
    }, 2000)
  }
});

function isFormValid() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const textInput = document.getElementById('text');
  
  // Check if all required fields are filled in
  if (nameInput.validity.valid && emailInput.validity.valid && textInput.validity.valid) {
      return true;
  } else {
      return false;
  }
}
