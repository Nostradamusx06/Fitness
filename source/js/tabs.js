(function () {
  const buttons = document.querySelectorAll('[data-tab]');
  const subscriptionContent = document.querySelector('.subscription__content');

  const subscriptionCards = [
    [
      {
        header: 'С тренером',
        description: '12 занятий',
        link: 'Купить абонемент'
      },
      {
        header: 'Дневной',
        description: 'с 8:00 до 17:00',
        link: 'Купить абонемент'
      },
      {
        header: 'Полный день',
        description: 'с 8:00 до 22:00',
        link: 'Купить абонемент'
      }
    ],
    [
      {
        header: 'С тренером',
        description: '12 занятий',
        link: 'Купить абонемент'
      },
      {
        header: 'Дневной',
        description: 'с 8:00 до 17:00',
        link: 'Купить абонемент'
      },
      {
        header: 'Полный день',
        description: 'с 8:00 до 22:00',
        link: 'Купить абонемент'
      }
    ],
    [
      {
        header: 'С тренером',
        description: '12 занятий',
        link: 'Купить абонемент'
      },
      {
        header: 'Дневной',
        description: 'с 8:00 до 17:00',
        link: 'Купить абонемент'
      },
      {
        header: 'Полный день',
        description: 'с 8:00 до 22:00',
        link: 'Купить абонемент'
      }
    ]
  ];

  function renderSubscriptionCards(cards, prices) {
    subscriptionContent.innerHTML = '';

    const cardList = document.createElement('ul');
    cardList.classList.add('subscription__list');

    cards.forEach((card, index) => {
      const cardItem = document.createElement('li');
      cardItem.classList.add('subscription__item');

      const headerElement = document.createElement('h3');
      headerElement.classList.add('subscription__item-header');
      headerElement.textContent = card.header;

      const descriptionElement = document.createElement('p');
      descriptionElement.classList.add('subscription__item-description');
      descriptionElement.textContent = card.description;

      const minTextElement = document.createElement('span');
      minTextElement.classList.add('subscription__min-text');
      minTextElement.textContent = prices[index];

      const maxTextElement = document.createElement('span');
      maxTextElement.classList.add('subscription__max-text');
      maxTextElement.textContent = prices[index];
      maxTextElement.setAttribute('aria-hidden', 'true');

      const linkElement = document.createElement('a');
      linkElement.classList.add('subscription__item-link', 'button');
      linkElement.href = '#!';
      linkElement.textContent = card.link;

      cardItem.appendChild(headerElement);
      cardItem.appendChild(descriptionElement);
      cardItem.appendChild(minTextElement);
      cardItem.appendChild(maxTextElement);
      cardItem.appendChild(linkElement);

      cardList.appendChild(cardItem);
    });

    subscriptionContent.appendChild(cardList);

    const cardElements = subscriptionContent.querySelectorAll('.subscription__item');
    cardElements.forEach((cardElement, index) => {
      if (index >= 3) {
        cardElement.classList.add('subscription__item--none');
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');

      const prices = button.dataset.prices.split(',');
      const cardIndex = parseInt(button.dataset.tab, 10) - 1;
      renderSubscriptionCards(subscriptionCards[cardIndex], prices);
    });
  });

  const defaultButton = buttons[0];
  const defaultPrices = defaultButton.dataset.prices.split(',');
  renderSubscriptionCards(subscriptionCards[0], defaultPrices);
})();
