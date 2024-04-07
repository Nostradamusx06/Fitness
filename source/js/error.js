(function () {
  const inputFields = document.querySelectorAll('.form__input');

  inputFields.forEach((inputField) => {
    const errorMessage = inputField.parentNode.querySelector('.form__error-message');

    inputField.addEventListener('invalid', (event) => {
      event.preventDefault();

      if (inputField.validity.valueMissing) {
        errorMessage.textContent = 'Это поле обязательно для заполнения';
      } else if (inputField.validity.typeMismatch) {
        errorMessage.textContent = 'Неверный формат данных';
      } else {
        errorMessage.textContent = 'Некорректное значение';
      }
      errorMessage.classList.add('form__error-message--error');
    });

    inputField.addEventListener('input', () => {
      if (inputField.validity.valid) {
        errorMessage.classList.remove('form__error-message--error');
      }
    });
  });
})();
