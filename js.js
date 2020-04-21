let menu = document.getElementsByClassName ('menu') [0],
    menuItem = document.getElementsByClassName ('menu-item'),
    menuItemLi = document.createElement('li'), // созадние нового тега
    text = document.getElementById ('title'),
    adv = document.getElementsByClassName('adv') [0],
    promtApple = document.querySelector("#prompt"); // выбор селектора 


menu.insertBefore(menuItem [2],menuItem[1]); // заменил местами элементы сначала который надо заменит второй на какое место

menuItemLi.classList.add("menu-item"); // добавление новго класса в родителский класс 
menuItemLi.textContent = "Пятый элемент";  // доабвление в класс текста                   
menu.appendChild(menuItemLi);  // обавляет узел в конец списка дочерних элементов указанного родительского узла
document.body.style.backgroundImage = "url('img/apple_true.jpg')";// замена картики на фоне 
text.textContent = "Мы продаем только подлинную технику Apple"; //замена текста не смотря на текс который есть уже в документе 
adv.remove(); // удаление со страинцы 
let oprosApple = prompt('Как вы относитесь к техники Apple ,',''); //данные для оопроса
promtApple.textContent = oprosApple;//добавлаение в селектор тексат с опроса 

//Метод querySelectorAll() Document возвращает статический (не динамический) NodeList, содержащий все найденные элементы документа, которые соответствуют указанному селектору.