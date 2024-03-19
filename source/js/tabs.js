const buttons = document.querySelectorAll('[data-tab');
const lists = document.querySelectorAll('[data-list]');

(function () {

  lists.forEach((list, i) => {
    if (i !== 0) {
      list.style.display = 'none';
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {

      buttons.forEach((item) => item.classList.remove('is-active'));

      lists.forEach((list) => {
        list.style.display = 'none';

        if (button.dataset.tab === list.dataset.list) {
          button.classList.add('is-active');
          list.style.display = 'block';
        }
      });
    });
  });
})();

