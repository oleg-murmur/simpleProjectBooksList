
// const addButton = document.getElementById('addButton');
// const viewButton = document.getElementById('viewButton');
// const addEventForm = document.getElementById('addEventForm');
// const saveEventButton = document.getElementById('saveEventButton');
// const eventsContainer = document.getElementById('eventsContainer');
// const eventDate = document.getElementById('eventDate');
// const eventName = document.getElementById('eventName');

// import('./style.css');
function submitForm() {
    const genres = document.getElementById('genres').value;
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;

    const data = {
        // genre: genres,
        // bookName: bookName,
        author: author
    };
console.log(data)
    
    fetch('http://localhost:3000/api/book/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Преобразуем ответ в JSON
        } else {
            throw new Error('Произошла ошибка при отправке данных на сервер');
        }
    })
    .then(data => { // СДЕЛАТЬ НОРМАЛЬНО
        console.log(data.result)
        const list = document.getElementById('book-list');
        list.textContent = ''
        list.className = 'booksPage-bookContainer';
        data.result.forEach(item => {
            const bookInf = document.createElement('div');
            bookInf.className = 'booksPage-bookContainer-bookItem';
            const name = document.createElement('h2');
            const genre = document.createElement('div');
            const author = document.createElement('div');
            const moreInfo = document.createElement('a');

            
            // moreInfo.className = 'buttonNameOfGenre1'
            moreInfo.textContent = "Подробнее" // Здесь предполагается, что данные содержат поле "title"
            moreInfo.href = '../bookPage/book.html'
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
        console.error('Произошла ошибка при отправке данных на сервер:', error);
    });
}


function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('book-list');
        list.textContent = ''
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
            moreInfo.href = '../bookPage/book.html'
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

