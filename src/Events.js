/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const b = document.createElement('button');
    b.innerHTML = 'Удали меня';
    b.addEventListener('click', () => {
        b.remove();
    });

    document.body.insertAdjacentElement('afterbegin', b);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const b = document.createElement('ul');

    for (let i = 0; i < arr.length; ++i) {
        const a = document.createElement('li');
        a.innerHTML = arr[i];

        a.addEventListener('mouseover', () => {
            a.title = arr[i];
        });

        b.insertAdjacentElement('beforeend', a);
    }

    document.body.insertAdjacentElement('beforeend', b);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';

    a.addEventListener('click', (event) => {
        if (a.innerHTML != 'tensor https://tensor.ru/') {
            event.preventDefault();
            a.innerHTML = a.innerHTML + ' ' + a.href;
        }
    });

    document.body.insertAdjacentElement('afterbegin', a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const a = document.createElement('ul');
    const b = document.createElement('li');

    b.addEventListener('click', () => {
        b.innerHTML += '!';
    });
    b.innerHTML = 'Пункт';
    a.insertAdjacentElement('beforeend', b);

    const c = document.createElement('button');
    c.addEventListener('click', () => {
        const t = b.cloneNode(true);
        t.addEventListener('click', () => {
            t.innerHTML += '!';
        });
        a.insertAdjacentElement('beforeend', t);
    });

    c.innerHTML = 'Добавить пункт';

    document.body.insertAdjacentElement('afterbegin', a);

    document.body.insertAdjacentElement('beforeend', c);
}
