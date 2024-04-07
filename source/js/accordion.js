(function () {
  const buttons = document.querySelectorAll('.faq__item-button');
  const accordionItems = document.querySelectorAll('.faq__accordion-item');
  const DEFAULT_INDEX = 0;
  const openedItems = {};
  const faqData = {
    tabs: [
      {
        title: 'Центр',
        items: [
          {
            question: 'Как стать членом фитнес\u2011центра?',
            answer: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и\u00A0подписать договор. При покупке абонемента онлайн, анкета также\u00A0заполняется онлайн и договор придёт вам на почту.'
          },

          {
            question: 'Где можно посмотреть расписание?',
            answer: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вамна почту.'
          },

          {
            question: 'Есть кулеры в центре? Предоставляются полотенца?',
            answer: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вам на почту.'
          },

          {
            question: 'Сколько тренеров работает в клубе и какова их\u00A0квалификация?',
            answer: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придёт вам на почту.'
          }
        ]
      },
      {
        title: 'Абонемент',
        items: [
          {
            question: 'Занятия с тренером входят в абонемент?',
            answer: 'При посещении тренажерного зала вам необходимо оплатить занятия с тренером отдельно. В зале всегда присутствует дежурный тренер, которому можно задать вопрос, получить небольшую консультацию по тренажеру или технике выполнения упражнения.'
          },

          {
            question: 'Можно ли заморозить абонемент?',
            answer: 'Да, в большинстве фитнес-клубов есть возможность заморозить абонемент на определенный период времени.'
          },

          {
            question: 'Есть ли лимит по посещениям тренажерного зала и групповых занятий?',
            answer: 'Нет, при наличии действующего абонемента вы можете посещать тренажерный зал и групповые занятия без ограничений.'
          },

          {
            question: 'Что такое семейный доступ и доступ для друзей?',
            answer: 'Семейный доступ позволяет членам одной семьи получить скидку на абонементы. Доступ для друзей предоставляет возможность привести друга в клуб по специальной цене.'
          }
        ]
      },
      {
        title: 'Услуги',
        items: [
          {
            question: 'Предлагает ли клуб услуги по консультированию по вопросам питания?',
            answer: 'Да. Вы можете обратиться как к своему тренеру, так и к нашему нутрициологу. Специалист уточнит ваши данные, цели и предложит программу питания.'
          },

          {
            question: 'Проводятся ли в клубе какие-либо мероприятия или соревнования?',
            answer: 'Да, мы регулярно проводим различные мероприятия и соревнования для наших клиентов. Следите за анонсами на нашем сайте и в социальных сетях.'
          },

          {
            question: 'Можно ли приобрести в центре спортивное питание?',
            answer: 'Да, в нашем клубе есть специализированный магазин, где вы можете приобрести спортивное питание и аксессуары.'
          },

          {
            question: 'Есть ли в центре детская комната?',
            answer: 'Да, у нас есть детская комната, где ваши дети могут провести время под присмотром квалифицированных воспитателей, пока вы занимаетесь спортом.'
          }
        ]
      },
      {
        title: 'Правила',
        items: [
          {
            question: 'Есть в фитнес-центре дресс-код?',
            answer: 'Для тренировок необходимо иметь предназначенную для этого закрытую спортивную обувь и одежду. Верхняя и нижняя части тела должны быть закрыты (используйте футболки, майки, спортивные брюки, шорты, кроссовки). В целях безопасности, запрещается тренироваться босиком, в пляжных или домашних тапочках и т. п., исключения составляют специальные классы (например, йога, пилатес).'
          },

          {
            question: 'Можно ли приводить с собой детей на тренировки?',
            answer: 'Нет, дети не могут присутствовать в тренажерном зале и на групповых занятиях. Для детей у нас есть специальная детская комната.'
          },

          {
            question: 'Какие дополнительные правила посещения центра?',
            answer: 'В нашем центре запрещено курение, распитие алкогольных напитков, агрессивное поведение и использование нецензурной лексики. Также необходимо соблюдать чистоту и порядок.'
          },

          {
            question: 'Нужна ли медицинская справка для посещения залов и бассейна?',
            answer: 'Да, для посещения тренажерного зала и бассейна необходима медицинская справка, подтверждающая отсутствие противопоказаний.'
          }
        ]
      }
    ]
  };

  const resetButtonsToDefault = (buttonsArray) => {
    buttonsArray.forEach((button) => button.classList.remove('faq__item-button--active'));
  };

  const resetAccordionToDefault = (accordionItemsArray) => {
    accordionItemsArray.forEach((item) => {
      const p = item.querySelector('p');
      p.classList.remove('faq__answer--active');
      item.classList.remove('faq__accordion-item--active');
    });
  };

  const activateTab = (index) => {
    buttons[index].classList.add('faq__item-button--active');
  };


  const toggleAccordionItemState = (accordionItem, p, isOpened, tabIndex) => {
    if (!accordionItem.classList.contains('faq__accordion-item--disabled')) {
      p.classList.toggle('faq__answer--active', isOpened);
      accordionItem.classList.toggle('faq__accordion-item--active', isOpened);

      const accordionItemIndex = Array.from(accordionItems).indexOf(accordionItem);
      const openedItemsForTab = openedItems[tabIndex] || new Set();

      if (isOpened) {
        openedItemsForTab.add(accordionItemIndex);
      } else {
        openedItemsForTab.delete(accordionItemIndex);
      }

      openedItems[tabIndex] = openedItemsForTab;
    }
  };

  const updateAccordionData = (tabData, accordionItemsArray, tabIndex) => {
    tabData.items.forEach((item, itemIndex) => {
      const accordionItem = accordionItemsArray[itemIndex];
      const p = accordionItem.querySelector('p');
      const button = accordionItem.querySelector('button');

      button.textContent = item.question;
      p.textContent = item.answer;

      const isOpened = (openedItems[tabIndex] || new Set()).has(itemIndex);
      toggleAccordionItemState(accordionItem, p, isOpened, tabIndex);
    });
  };

  const handleButtonClick = (event) => {
    const button = event.target.closest('.faq__item-button');
    if (!button) {
      return;
    }

    const index = Array.from(buttons).indexOf(button);
    resetButtonsToDefault(buttons);
    activateTab(index);

    const tabData = faqData.tabs[index];
    resetAccordionToDefault(accordionItems);
    updateAccordionData(tabData, accordionItems, index);
  };

  const handleAccordionClick = (event) => {
    const accordionItem = event.target.closest('.faq__accordion-item');
    if (accordionItem) {
      const tabIndex = Array.from(buttons).indexOf(document.querySelector('.faq__item-button--active'));
      toggleAccordionItemState(accordionItem, accordionItem.querySelector('p'), !openedItems[tabIndex].has(Array.from(accordionItems).indexOf(accordionItem)), tabIndex);
    }
  };

  const defaultItem = accordionItems[DEFAULT_INDEX];
  const defaultItemP = defaultItem.querySelector('p');
  toggleAccordionItemState(defaultItem, defaultItemP, true, DEFAULT_INDEX);
  openedItems[DEFAULT_INDEX] = new Set([DEFAULT_INDEX]);

  const tabsList = document.querySelector('.faq__tabs-list');
  tabsList.addEventListener('click', handleButtonClick);


  const accordionList = document.querySelector('.faq__accordion-list');
  accordionList.addEventListener('click', handleAccordionClick);
})();
