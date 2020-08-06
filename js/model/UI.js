class UI {
    addBookToList(book) {
        console.log(book);
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td id='title'>${book.title}</td>
            <td id='author'>${book.author}</td>
            <td id='isbn'>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(book) {
        book.remove();
    }

    restoreBookList(books) {
        for (let x = 0; x < books.length; x++) {
            this.addBookToList(new Book(books[x].title, books[x].author, books[x].isbn));
        }
    }

}