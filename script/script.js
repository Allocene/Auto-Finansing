//burger menu
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".header_burger");
  const menu = document.querySelector(".header_menu");
  const body = document.querySelector("body");

  burger.addEventListener("click", function(event) {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  });
});


// //div class box
// function showText(element) {
//   const image = element.querySelector('img');
//   const text = element.querySelector('.text');

//   image.style.display = 'none';
//   text.style.display = 'block';
// }
// function hideText(element) {
//   const image = element.querySelector('img');
//   const text = element.querySelector('.text');

//   text.style.display = 'none';
//   image.style.display = 'block';
// }


//open/close modal window
const openModalBtns = document.getElementsByClassName('openModalBtn');
const modalOverlay = document.querySelector('.modal-overlay');
const submit = document.getElementById('submit');
const successMessage = document.querySelector('.success-message');
const failMessage = document.querySelector('.fail-message');

for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener('click', function() {
        modalOverlay.style.display = 'flex'; // Показать затемненный экран
    });
}

modalOverlay.addEventListener('click', function(click) {
    if (click.target === modalOverlay) {
        modalOverlay.style.display = 'none'; // Скрыть затемненный экран при клике вне модального окна
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
    }, 2000)
  }

  if (!isFormValid()) {
    failMessage.style.display = 'block'; // Show fail message


    setTimeout(function() {
      modalOverlay.style.display = 'none';
      failMessage.style.display = 'none';
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
