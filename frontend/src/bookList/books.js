
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
        const list = document.getElementById('book-list');
        list.className = 'booksPage-bookContainer';
        data.forEach(item => {
            const bookInf = document.createElement('div');
            bookInf.className = 'booksPage-bookContainer-bookItem';
            const name = document.createElement('h2');
            const genre = document.createElement('div');
            const author = document.createElement('div');
            const moreInfo = document.createElement('a');

            
            // moreInfo.className = 'buttonNameOfGenre1'
            moreInfo.textContent = "Подробнее" // Здесь предполагается, что данные содержат поле "title"
            moreInfo.href = 'https://example.com'
            name.textContent = item.bookName; // Здесь предполагается, что данные содержат поле "title"
            genre.textContent = item.genre;
            author.textContent = item.author;

            bookInf.appendChild(moreInfo); 
            bookInf.appendChild(author);
            bookInf.appendChild(genre);
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