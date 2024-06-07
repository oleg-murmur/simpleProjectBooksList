
// const addButton = document.getElementById('addButton');
// const viewButton = document.getElementById('viewButton');
// const addEventForm = document.getElementById('addEventForm');
// const saveEventButton = document.getElementById('saveEventButton');
// const eventsContainer = document.getElementById('eventsContainer');
// const eventDate = document.getElementById('eventDate');
// const eventName = document.getElementById('eventName');

// import('./style.css');

function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('data-list');
        list.className = 'data-list';
        data.forEach(item => {
            const bookInf = document.createElement('div');
            bookInf.className = 'Test';
            const name = document.createElement('h2');
            const genre = document.createElement('div');
            const author = document.createElement('div');
            name.textContent = item.bookName; // Здесь предполагается, что данные содержат поле "title"
            genre.textContent = item.genre;
            author.textContent = item.author;
            bookInf.appendChild(author);
            bookInf.appendChild(genre);
            bookInf.appendChild(name);
            bookInf.appendChild(name);


            list.appendChild(bookInf);
        });
    })
    .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
    });
}

// Вызов функции для загрузки данных с сервера
const serverUrl = 'http://localhost:3000/api/book/getall';
fetchData(serverUrl);