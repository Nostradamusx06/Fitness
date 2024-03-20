(function () {
  const buttons = document.querySelectorAll('[data-index]');
  const listsSubscriptions = document.querySelectorAll('[data-list]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');

      listsSubscriptions.forEach((list) => {
        const priceData = button.dataset.prices.split(',');
        const subscriptionItems = list.querySelectorAll('.subscription__item');

        subscriptionItems.forEach((item, index) => {
          const price = priceData[index];
          item.querySelector('.subscription__min-text').textContent = price;
          item.querySelector('.subscription__max-text').textContent = price;
        });
      });
    });
  });
})();
