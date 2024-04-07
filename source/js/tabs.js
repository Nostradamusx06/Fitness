(function () {
  const buttons = document.querySelectorAll('[data-index]');
  const subscriptionItems = document.querySelectorAll('.subscription__item');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('tabs__button--active'));
      button.classList.add('tabs__button--active');

      const priceData = button.dataset.prices.split(',');

      subscriptionItems.forEach((item, index) => {
        const price = priceData[index];
        item.querySelector('.subscription__min-text').textContent = price;
        item.querySelector('.subscription__max-text').textContent = price;
      });
    });
  });
})();
