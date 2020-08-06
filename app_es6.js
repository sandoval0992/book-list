const ui = new UI();
const localStorageFacade = new LocalStorage();

document.getElementById('book-form').addEventListener('submit', addBook);
document.getElementById('book-list').addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', restoreBookList);

function addBook(e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    let className,
        message;

    const book = new Book(title, author, isbn);

    if (title === '' || author === '' || isbn === '') {
        className = 'error';
        message = 'Please fill in all the fields!'
    } else {
        className = 'success';
        message = 'Book added!'
        ui.addBookToList(book);
        localStorageFacade.add(book);
        ui.clearFields();
    }
    ui.showAlert(message, className);
    e.preventDefault();
}

function removeBook(e) {
    if (e.target.classList.contains('delete')) {
        const tableRow = e.target.parentElement.parentElement;

        const table = document.createElement('table');
        table.innerHTML = tableRow.innerHTML;

        const title = table.querySelector('#title').innerText,
            author = table.querySelector('#author').innerText,
            isbn = table.querySelector('#isbn').innerText;

        ui.deleteBook(tableRow);
        localStorageFacade.remove(new Book(title, author, isbn));
        ui.showAlert('Book removed!', 'success');
    }
}

function restoreBookList() {
    ui.restoreBookList(localStorageFacade.getAll());
}