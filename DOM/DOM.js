console.log(('~~~ 1. Навигация по документу ~~~').toUpperCase());
/*
Самые верхние элементы дерева DOM
доступны как свойства объекта document
*/
const htmlElem = document.documentElement;
console.log('###  1. Данные о html  ###' );
console.log(htmlElem);

const headElem = document.head;
console.log('###  2. Данные о head  ###');
console.log(headElem);

const bodyElem = document.body;
console.log('###  3. Данные о body  ###')
console.log(bodyElem);



console.log(('----1.2. lastChild&firstChild----').toUpperCase());
const bodyElement = document.body; // получаем объект body

console.log('###  1. firstChild  ###')
//получаем доступ к первому дочернему элементу(узел)
const firstChildNode = bodyElement.firstChild; 
// вывод первого объекта дерева
console.log(firstChildNode);

console.log('###  2. lastChild  ###')
// получаем доступ к второму дочернему элементу(узел)
const lastChildNode = bodyElement.lastChild; 
// вывод последнего объекта дерева
console.log(lastChildNode); 


console.log('###  3. childNodes  ###');
// childNodes содержит список всех детей, включая текстовые узлы
const childNodesElement = bodyElement.childNodes;
console.log(childNodesElement);

/*
Для проверки наличия дочерних узлов
существует также специальная функция hasChildNodes()
*/
console.log(bodyElement.hasChildNodes);



console.log(('----1.3. Соседние и родительский элементы----').toUpperCase());
const bodyElementF = document.body;

console.log('###  1. previosSibling  ###');
//получаем предыдущий узел перед объектом
const previosElement = bodyElementF.previousSibling;
console.log(previosElement);

console.log('###  2. nextSibling  ###');
//получаем следующий узел после объекта
const nextSiblingNode = bodyElementF.nextSibling;
console.log(nextSiblingNode);

console.log('###  3. parentNode  ###');
// получаем родительский узел объекта
const parentNode = bodyElementF.parentNode;
console.log(parentNode);


console.log(('----1.4. Вывод элементов(тегов)----').toUpperCase());
console.log('5.###  children  ###');
// получает только теги объекта
const bodyElementsS = document.body;
const childNodesS = bodyElementsS.children;
console.log(childNodesS);

console.log('6.###  firstElementChild  ###');
// получает первый тег объекта
const firstElemChild = bodyElem.firstElementChild;
console.log(firstElemChild);

console.log('7.###  lastElementChild  ###');
// получает последний тег объекта
const lastElemChild = bodyElem.lastElementChild;
console.log(lastElemChild);



console.log(('----1.5. Соседние и родительский элементы(теги)----').toUpperCase());
const bodyElementG = document.body;

console.log('1.###  previousElementSibling  ###')
// выводит предшедствующий элемент данному элементу
const previosElemSibling = bodyElementG.previousElementSibling;
console.log(previosElemSibling)

console.log('2.###  nextElementSibling  ###');
// получает следующий за данным элементом элемент
const nextElemSibling = bodyElementG.nextElementSibling;
console.log(nextElemSibling);

console.log('3.###  parentElement  ###')
// получает родительский элемент данного элемента
const parentsElement = bodyElementG.parentElement;
console.log(parentsElement);



console.log(('----1.6. Поиск произвольного элемента----').toUpperCase());
console.log('###  1. element.querySelectorAll(CSS)  ###');
/*
Самый универсальный метод поиска
возвращает все элементы внутри elem,
удовлетворяющие данному CSS-селектору.
Можно использовать любой CSS-селектор.
Получаем статичную коллекцию объектов. 
*/
console.log('###  1.1 Поиск по селектору класса  ###');
const elemsOne = document.querySelectorAll('.text');
console.log(elemsOne)

console.log('###  1.2 Поиск по селектору тега  ###');
const elemsTwo = document.querySelectorAll('li');
console.log(elemsTwo);

console.log('###  1.3 Поиск по смешанному селектору тега и класса  ###');
const elemsThree = document.querySelectorAll('li__1.text-1');
console.log(elemsThree)

console.log('###  1.4 Поиск по тегу первого уровня вложенности  ###');
const elemsFour = document.querySelectorAll('.text>li');
console.log(elemsFour);

console.log('###  1.5 Поиск по нескольким классам  ###');
const elemsFifth = document.querySelectorAll('.text, .item');
console.log(elemsFifth);

console.log('###  1.6 Поиск по вложенным классам  ###');
const elemsSixth = document.querySelectorAll('.main .text');
console.log(elemsSixth);

console.log('###  1.7 Поиск по ID  ###');
const elemsSeventh = document.querySelectorAll('#listItem')
console.log(elemsSeventh);

console.log('###  1.8 Поиск по атрибуту  ###');
const elemsEight = document.querySelectorAll('[data-item]')
console.log(elemsEight);

console.log('###  1.9 Поиск по атрибуту со значением  ###');
const elemsNinth = document.querySelectorAll('[data-item="85"]');
console.log(elemsNinth);


console.log('###  1.10 Другой вариант поиска  ###');
/*
По умолчанию querySelectorAll проверяет последний элемент
без учета контекста
*/  
const sublist = document.querySelectorAll('.text');
const listItems = sublist[0].querySelectorAll('.main .text-1');
console.log(listItems);



console.log('###  2.querySelector  ###');
/*
Возращает первый элемент внутри elem, соответствующий
данному CSS-селектору
*/
const lessonListTwo = document.querySelector('.text');
console.log(lessonListTwo);



console.log('###  3.getElementsBy  ###');
/*
Если у элемента есть атрибут id,
то мы можем получить его вызовом document.getElementById(id),
где бы он не находился.
получаем именно живую коллекцию.
*/
console.log('###  3.1 getElementsById  ###');
const elemId = document.getElementById('listItem');
console.log(elemId);

console.log('###  3.2 getElementsByTagName  ###');
// Поиск по имени тега
const elemTag = document.getElementsByTagName('li');
console.log(elemTag);

console.log('###  3.3 getElementsByClassName  ###');
// Поиск по имени класса
const elemClass = document.getElementsByClassName('text');
console.log(elemClass);

console.log('###  3.4 getElementsByName  ###');
// Поиск по имени
const elemName = document.getElementsByName('da');
console.log(elemName);

console.log('----1.7 Проверки----')
console.log('###  1 closest  ###');
// Если искомый элемент имеется в дереве данного блока, выполняется вывод
const elemClose = document.querySelector('.text__elem');
const parentElemClose = elemClose.closest('.main');
console.log(parentElemClose);


console.log('###  2 Проверка mathes  ###');
// Получаем коллекцию элементов с данным классом
const elemMath = document.querySelectorAll('.text__elem');
console.log(elemMath);

/*
Проверяем, удовлетворяет ли элемент CSS-селектору,
и возвращает true or false.
*/
console.log('###  3. mahes в for  ###');
for (let elem of elemMath) {
    if (elem.matches('[class$="elem--red"]')) {
        console.log('Red');
    } else if (elem.matches('[class$="elem--blue"]')) {
        console.log('Blue');
    }
}

console.log(('~~~ 2. Изменение документа HTML ~~~').toUpperCase());
const textElementIn = document.querySelector('.list');
// показвает содержимое html файла, как есть
const textElementContent = textElementIn.innerHTML;

console.log('###  1. innerHTML ###');
// вставляем определенный контент в нужную директорию
textElementIn.innerHTML = 
    `<p>${textElementContent}</p>
    <p>Живи, а работай в свободное время</p>`;
console.log(textElementIn.innerHTML);

console.log('###  2. outerHTML ###');
const textElementOuter = textElementIn.outerHTML;
console.log(textElementOuter);
/*
Содержимое элементов целиком outerHTML;
меняет только содержимое на выводе 
*/

console.log('###  3. textContent ###');
const textElementDoc = document.querySelector('.list');
/*
textContent получает только текст объектов
*/
const textElementDocContent = textElementDoc.textContent;
console.log(textElementDocContent);
/*
textElementDoc.textContent = `<p>Живи, а работай в свободное время</p>`;
console.log(textElementDoc.textContent)
*/

console.log('###  4. data ###');
const textElementData = document.querySelector('.main');
console.log(textElementData);
const getComment = textElementData.nextSibling;
console.log(getComment);
console.log(getComment.data);

getComment.data = 'Пока';
console.log(getComment.data);



console.log('###  5. CreateElement  ###');
// Создает новые элементы
const newElement = document.createElement('div');
console.log(newElement);
// Наполняем новый элемент
newElement.innerHTML = `Живи, а работай в свободное время!`;
console.log(newElement);


console.log('###  6. Directory  ###');
// настройка вставки элемента newElement
const textNewElementBefore = document.querySelector('.text');


console.log('### 6.1 before  ###');
const newElementBefore = document.createElement('span');
newElementBefore.innerHTML = 'Текст перед объектом';
// перед объектом
textNewElementBefore.before(newElementBefore);
console.log(textNewElementBefore);


const textNewElementAfter = document.querySelector('.text');
console.log('### 6.2 after  ###');
const newElementAfter = document.createElement('span');
newElementAfter.innerHTML = 'Текст после объекта';
// после объекта
textNewElementAfter.after(newElementAfter);
console.log(textNewElementAfter);


const textNewElementPrepend = document.querySelector('.text');
console.log('### 6.3 prepend  ###');
const newElementPrepend = document.createElement('span');
newElementPrepend.innerHTML = 'Текст в начале объекта';
// внутрь и в начало объекта
textNewElementPrepend.prepend(newElementPrepend);
console.log(textNewElementPrepend);


const textNewElementAppend = document.querySelector('.text');
console.log('### 6.4 append  ###');
const newElementAppend = document.createElement('span');
newElementAppend.innerHTML = 'Текст в конце объекта';
// внутрь и в конец объекта
textNewElementAppend.append(newElementAppend);
console.log(textNewElementAppend)


console.log('###  7 insertAdjacentHTML  ###');
const textNewElementAdjacent = document.querySelector('.main');
textNewElementAdjacent.insertAdjacentHTML(
    'afterend',
    `<p>Живи, а работай в сободное время</p>`
    // теги будут распознаны и вставляться не в безопасном режиме
);
/*
'beforebegin' - вставить html перед textElement
'afterbegin' - вставить html в начало textElement
'beforeend' - вставить html в конец textElement
'afterend' - вставить html после textElement
*/


console.log('~~~ 3. Копировние ~~~')
console.log('### 3.1 cloneNode  ###');
const textElementCloneNode = document.querySelector('.text__elem');
// клонирование без дочерних элементов
const newElementCloneNode = textElementCloneNode.cloneNode();
console.log(newElementCloneNode);

console.log('###  3.2 cloneNode(true)  ###');
const textElementCloneNodeTrue = document.querySelector('.text__elem');
// глубокое кланирование вместе с содержимым
const newElementCloneNodeTrue = textElementCloneNodeTrue.cloneNode(true);
console.log(newElementCloneNodeTrue);

console.log('###  3.3 prepend (clone)  ###')
const textDirectoryForClone = document.querySelector('.text .list');
textDirectoryForClone.prepend(newElementCloneNodeTrue); 
console.log(textDirectoryForClone);

console.log('###  3.4 remove (clone)  ###')
//newElementCloneNodeTrue.remove();
console.log(textDirectoryForClone);



console.log('~~~ 4. Изменение ~~~');

console.log('---- 1.classList ----');
// className перезаписывает имя класса, а classList добавляет новое
const elementClassList = document.querySelector('.text');

console.log('1.1 classList.add');
// Добавление класса active
elementClassList.classList.add('active');
console.log(elementClassList);

console.log('1.2 classList.remove');
// Удаление класса active
elementClassList.classList.remove('active');
console.log(elementClassList);

const elementClassListToggle = document.querySelector('.list');
console.log('1.3 classList.toggle');
// Добавить класс, если его нет, а если есть, удалить
elementClassListToggle.classList.toggle('active');
console.log(elementClassListToggle);

console.log('1.4 classList.contains');
// Проверка наличия класса, возращает true/false
elementClassList.classList.contains('avtive');
console.log(elementClassList); 


console.log('~~~ 5. Изменение документа CSS ~~~');

console.log('###  1. style.свойство  ###');
const elementStyleCss = document.querySelector('.text');
elementStyleCss.style.color = 'red';
console.log(getComputedStyle(elementStyleCss).color);


console.log('###  2. cssText  ###');
elementStyleCss.style.cssText = `
    margin-bottom: 30px;
    color: red;
`;

console.log('###  3. getComputedStyle()  ###');
console.log('3.1 getComoputedStyle().fontSize');
// Стиль элемента
console.log(getComputedStyle(elementStyleCss).fontSize);

console.log('3.2 getComputedStyle().backgroundColor')
// Стиль псевдокласса
const elementBeforeStyle = getComputedStyle(elementStyleCss, "::before");
console.log(elementBeforeStyle.backgroundColor);

console.log('3.3 getComputedStyle().parseInt');
// выводит отступ слева в виде числа(parseInt)
const elementStyleCsspaddingLeft = parseInt(elementStyleCss.paddingLeft);
console.log(elementStyleCsspaddingLeft);



console.log('~~~ 6. Атрибуты и свойства ~~~');

console.log('###  6.1 для блока link  ###');
const link = document.querySelector('.text__link');
console.log(link.href);
console.log(link.value);

console.log('###  6.2 для блока input  ###');
const input = document.querySelector('.text__input');
console.log(input.href);
console.log(input.value);


// Получить список доступных свойств
const textDir = document.querySelector('.text');
console.dir(textDir);


const someTextAttribute = document.querySelector('.text');
console.log('----Attribute ----');

console.log('###  1. hasAttribute  ###');
// Проверяем наличие атрибута
checkAttribute = someTextAttribute.hasAttribute('name');
console.log(checkAttribute);

console.log('###  2. setAttribute  ###');
// Получаем значение атрибута
valueAttribute = someTextAttribute.setAttribute('name', 'value');
console.log(valueAttribute);

console.log('###  3. removeAttribute  ###');
// Удаляем атрибут
delAttribute = someTextAttribute.removeAttribute('name');
console.log(delAttribute);

console.log('###  4. getAttribute  ###');
// Получение атрибута
getAttributeName = someTextAttribute.getAttribute('id'); 
console.log(getAttributeName);

console.log('Полезные свойства');
// получает тег элемента в верхнем регистре
console.log('###  1', link.tagName, '  ###');

console.log('###  2. скрываем элемент  ###');
link.hidden = true;

console.log('###  3. запрашиваем состояние hidden элемента  ###');
console.log(link.hidden);o