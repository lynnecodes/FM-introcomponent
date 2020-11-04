function submitFormHandler(e) {
    e.preventDefault();
    alert('Form submitted succesfully!');
}
  
function invalidInputHandler(e) {
    const input = e.target;
    const id = input.getAttribute('id');
    const errorLabel = input
        .closest('form')
        .querySelector(`.error[for=${id}]`);
        document.getElementById('first').setCustomValidity('First Name cannot be empty');
        document.getElementById('last').setCustomValidity('Last Name cannot be empty');
        document.getElementById('email').setCustomValidity('Looks like this is not an email');
        document.getElementById('password').setCustomValidity('Password cannot be empty');

    e.preventDefault();
    errorLabel.textContent = input.validationMessage;
    input.classList.add('invalid');
}
  
function changeInputHandler(e) {
    const input = e.target;

    if (!input.validity.valid) return;
    const id = input.getAttribute('id');
    const errorLabel = input
        .closest('form')
        .querySelector(`.error[for=${id}]`);

    errorLabel.textContent = '';
    input.classList.remove('invalid');
}
  
const form = document.querySelector('.js-signup-form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', submitFormHandler);
inputs.forEach(input => {
    input.addEventListener('invalid', invalidInputHandler);
    input.addEventListener('change', changeInputHandler);
});
  