(function () {
  const inputFields = document.querySelectorAll('.form__input');

  inputFields.forEach((inputField) => {
    const errorMessage = inputField.parentNode.querySelector('.error-message');

    inputField.addEventListener('invalid', (event) => {
      event.preventDefault();

      if (inputField.validity.valueMissing) {
        errorMessage.textContent = 'Текст ошибки';
      } else if (inputField.validity.typeMismatch) {
        errorMessage.textContent = 'Текст ошибки';
      } else {
        errorMessage.textContent = 'Текст ошибки';
      }
      errorMessage.classList.add('error-message--error');
    });

    inputField.addEventListener('input', () => {
      if (inputField.validity.valid) {
        errorMessage.classList.remove('error-message--error');
      }
    });
  });
})();
