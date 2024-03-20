(function () {
  const buttons = document.querySelectorAll('[data-index]');
  const subscriptionItems = document.querySelectorAll('.subscription__item');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');

      const priceData = button.dataset.prices.split(',');

      subscriptionItems.forEach((item, index) => {
        const price = priceData[index];
        item.querySelector('.subscription__min-text').textContent = price;
        item.querySelector('.subscription__max-text').textContent = price;
      });
    });
  });
})();
