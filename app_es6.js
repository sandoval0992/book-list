document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    let className,
        message;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        className = 'error';
        message = 'Please fill in all the fields!'
    } else {
        className = 'success';
        message = 'Book added!'
        ui.addBookToList(book);
        ui.clearFields();
    }

    ui.showAlert(message, className);



    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book removed!', 'success');

});