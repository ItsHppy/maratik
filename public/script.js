



    var pages = {
        'home': `
            <img src="data:image/jpeg;base64,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" alt="">
            <p>У нас самые лучшие тренера минска!!!</p>
            <p>Все тренера рады вашему приходу!!!</p>
            <img src="data:image/jpeg;base64,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" alt="Домашняя страница 2">
            <p>Топ 1 в Беларуси!!!</p>
                        <p>Тут выпвщивают настоящих монстрав!!</p>
            <img src="https://sun9-16.userapi.com/s/v1/if1/Zmnn7BMBj2ZFkVGbM1ugpVycNzqLnJ9M2GMUUCDGf9M1ItzLtpyxno8jA1uwVNe05hh_cSnW.jpg?size=200x221&quality=96&crop=0,0,925,1024&ava=1" alt="Домашняя страница 3">
            <p>Ждем всех в клубе ACADEMY MMA</p>
            <p>ПРОБНОЕ ЗАНЯТИЕ БЕСПЛАТНО!!!!</p>
        `,
        'groups': `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEQB4eP6Kj41AC2qqHt9lR4EMH3YSGlfG_iYNKyCU__GQTEuPGX4wlCuEKST9-DmoTBI&usqp=CAU" alt="Домашняя страница 1">
        <p>Детская группа 5-7 лет</p>
        <p>группа 9+</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThl2hCy7JE4fYsX0MnewhGmljhxLMcf75K6FtPFBkLxYplNoL6kox4QSxM6yPTd0FxGSg&usqp=CAU" alt="Домашняя страница 2">
        <p>группа 14+</p>
        <p>группа 21+</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-fC5M9jD4Qy5KVPzeRj5IFnvN8s0I904BeANCkb1R6J5QdLvYlDsiX9A7x4DCs9bIn8&usqp=CAU" alt="Домашняя страница 3">
        <p>женская группа</p>
        <p>индивидуальные занятия</p>
    `,
    'gym': `
    <img src="https://www.gym24.by/wp-content/uploads/2023/12/gym24.jpg" alt="">
    <p>обонемент на 1 занятие</p>
    <p>обонемент на 3 занятия</p>
    <img src="https://ms1.relax.by/images/0eedcf93c9c03eb30e508f1345a121fd/thumb/w=182,h=182,q=80/catalog_place_photo_default/50/bd/97/50bd97f79500757afe6eb60dc54e74a4.jpg" alt="">
    <p>обонемент на 5 занятий</p>
    <p>обонемент на 10 занятий</p>
    <img src="https://avatars.mds.yandex.net/get-altay/1777247/2a0000016da5ef6046d20747e5b42858bfd7/orig" alt="">
    <p>обонемент на 12 занятий</p>
    <p>обонемент на месяц</p> `,

    'rasp': `
    <p> Расписание на MMA<p>
    <p>Понедельник:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>
    <p>Вторник:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>
    <p>Среда:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>
    <p>Четверг:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>
    <p>Пятница:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>
    <p>Суббота:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>
    <p>Воскресенье:
    <p>7:00</p>
    <p>10:00</p>
    <p>11:00</p>
    <p>13:00</p>
    <p>16:50</p>
    <p>18:40</p>
    <p>20:30</p>
    <hr color= "black">
    </p>


    <p> Расписание на КАЧАЛКУ<p>
    <p>Понедельник:
    <p>4:00 - 23:00</p>
    
    <hr color= "black">
    </p>
    <p>Вторник:
    <p>6:00 - 0:00</p>
  
    <hr color= "black">
    </p>
    <p>Среда:
    <p>7:00 - 2:00</p>

    <hr color= "black">
    </p>
    <p>Четверг:
    <p>7:00 - 22:00</p>
    
    <hr color= "black">
    </p>
    <p>Пятница:
    <p>10:00 - 21:00</p>
   
    <hr color= "black">
    </p>
    <p>Суббота:
    <p>12:00 - 20:00</p>
 
    <hr color= "black">
    </p>
    <p>Воскресенье:
    <p>10:00 - 19:00</p>
    
    <hr color= "black">
    </p>






    
    `,
       


    'cen': `
    <p> Цены на занятие по mma
    <p>обонемент на 3 занятия- 20byn</p>
    <p>обонемент на 5 занятия- 40byn</p>
    <p>обонемент на 7 занятия- 60byn</p>
    <p>обонемент на 12 занятия- 120byn</p>
    <p>обонемент на 15 занятия- 150byn</p>
    <p>обонемент на 20 занятия- 200byn</p>
    <p>обонемент на год - 500byn</p>
    </p>
    <p>Цены на занятие в качалку</p> 
    <p>обонемент на 3 занятия- 35byn</p> 
    <p>обонемент на 5 занятия- 55byn</p> 
    <p>обонемент на 7 занятия- 76byn</p> 
    <p>обонемент на 12 занятия- 155byn</p> 
    <p>обонемент на 15 занятия- 190byn</p> 
    <p>обонемент на 20 занятия- 220byn</p> 
    <p>обонемент на год - 1000byn</p> 


    `,
 };



































       
   

    







    

function showPage(page) {
    document.getElementById('content').innerHTML = pages[page];
}





























    fetch('http://localhost:3000/fighter?id=1&namе=Семен Семенович&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=2&namе=Игорь Кузьма&rey=3-4-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=3&namе=Леша Лопатин&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=4&namе=Вова Подалинмкий&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=5&namе=Саша Ковш&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=6&namе=Серега Шкаф&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=7&namе=Петя Пупкин&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=8&namе=Гадзила&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=9&namе=Венум&rey=10-0-2').then(date => date.json()).then(arr => console.log(arr)) 
    fetch('http://localhost:3000/fighter?id=10&namе=Леша Потлатый&rey=2-6-2').then(date => date.json()).then(arr => console.log(arr)) 




























 















  
  
  

  