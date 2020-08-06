
class LocalStorage {

    add(item) {
        const books = this.getAll();
        books.push(item);
        localStorage.setItem('books', JSON.stringify(books));
    }

    remove(item) {
        const books = this.getAll();

        books.forEach(function (book, index) {
            if (JSON.stringify(book) === JSON.stringify(item)) {
                books.splice(index, 1);
            }
        });

        if (books.length === 0) {
            localStorage.removeItem('books');
        } else {
            localStorage.setItem('books', JSON.stringify(books));
        }
    }

    getAll() {
        return localStorage.getItem('books') === null ? [] : JSON.parse(localStorage.getItem('books'));
    }
}