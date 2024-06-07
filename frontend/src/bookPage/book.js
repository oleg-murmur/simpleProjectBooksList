const bookNameDiv = document.querySelector('.bookName');
const bookAuthorDiv = document.querySelector('.bookAuthor');
const genreBookDiv = document.querySelector('.genreBook');
const bookDescription = document.querySelector('.bookDescription');

const imgElement = document.getElementById('image');

const urlParams = new URLSearchParams(window.location.search);
// Получаем значение параметра 'id' из query параметров
const bookId = urlParams.get('id');
// Проверяем, был ли передан ID пользователя
if (bookId) {
    console.log('ID книги из query параметров: ' + bookId);
    // Ваши дальнейшие действия с полученным ID
    // Например, отправка запроса на сервер с этим ID
} else {
    console.log('ID книги не найден в query параметрах');
}
function displayImage() {
    const imageUrl = `http://localhost:3000/api/book/cover/${bookId}`; // Замените на URL изображения на сервере
    const imgElement = document.getElementById('image');
    fetch(imageUrl)
        .then(response => {
            if (response.ok) {
                return response.blob();
            }
            throw new Error('Network response was not ok.');
        })
        .then(blob => {
            const imgUrl = URL.createObjectURL(blob);
            imgElement.src = imgUrl;
        })
        .catch(error => {
            console.error('Ошибка при загрузке изображения:', error);
        });
}

// Вызовите функцию для отображения изображения при загрузке страницы
displayImage();
function fetchData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let bookInfo = data.result
            bookNameDiv.textContent = bookInfo.bookName;
            genreBookDiv.textContent = bookInfo.genre;
            bookAuthorDiv.textContent = bookInfo.author;
            bookDescription.textContent = bookInfo.direction;
    })
    .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
    });
}

// Вызов функции для загрузки данных с сервера
const serverUrl = `http://localhost:3000/api/book/${bookId}`;
fetchData(serverUrl);