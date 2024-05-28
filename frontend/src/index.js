
const addButton = document.getElementById('addButton');
const viewButton = document.getElementById('viewButton');
const addEventForm = document.getElementById('addEventForm');
const saveEventButton = document.getElementById('saveEventButton');
const eventsContainer = document.getElementById('eventsContainer');
const eventDate = document.getElementById('eventDate');
const eventName = document.getElementById('eventName');


function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('data-list');
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.bookName; // Здесь предполагается, что данные содержат поле "title"
            list.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
    });
}

// Вызов функции для загрузки данных с сервера
const serverUrl = 'http://localhost:3000/api/book/getall';
fetchData(serverUrl);