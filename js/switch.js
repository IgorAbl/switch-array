// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const num = 3;

switch (num) {
    case 1:
        console.log('result :>> ', 'Зима');
        break;
    case 2: 
        console.log('result :>> ', 'Весна');
        break;
    case 3: 
        console.log('result :>> ', 'Лето');
        break;
    case 4:
        console.log('result :>> ', 'Осень'); 
        break;
}

// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

const month = 1;


switch (month) {
    case 1:
        console.log('result :>> ', 'Зима');
        break;
    case 2: 
        console.log('result :>> ', 'Зима');
        break;
    case 3: 
        console.log('result :>> ', 'Весна');
        break;
    case 4:
        console.log('result :>> ', 'Весна'); 
        break;
    case 5:
        console.log('result :>> ', 'Весна'); 
        break;
    case 6:
        console.log('result :>> ', 'Лето'); 
        break;
    case 7:
        console.log('result :>> ', 'Лето'); 
        break;
    case 8:
        console.log('result :>> ', 'Лето'); 
        break;
    case 9:
        console.log('result :>> ', 'Осень'); 
        break;
    case 10:
        console.log('result :>> ', 'Осень'); 
        break;
    case 11:
        console.log('result :>> ', 'Осень'); 
        break;
    case 12:
        console.log('result :>> ', 'Зима'); 
        break;
}
// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

const week = prompt('Введите число от 1 до 7');


switch (week) {
    case '1':
        alert('Понедельник');
        break;
    case '2': 
        alert('Вторник');
        break;
    case '3': 
        alert('Среда');
        break;
    case '4':
        alert('Четверг'); 
        break;
    case '5':
        alert('Пятница'); 
        break;
    case '6':
        alert('Суббота'); 
        break;
    case '7':
        alert('Воскресенье'); 
        break;
}

// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = 15;

switch(day){
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        console.log('Первая декада');
        break;
    case 20:
    case 19:
    case 18:
    case 17:
    case 16:
    case 15:
    case 14:
    case 13:
    case 12:
    case 11:
        console.log('Вторая декада');
        break;
    case 31:    
    case 30:
    case 29:
    case 28:
    case 27:
    case 26:
    case 25:
    case 24:
    case 23:
    case 22:
    case 21:
        console.log('Третья декада');
        break;
    default:
        console.log('Столько дней нет ни в одном месяце');
}