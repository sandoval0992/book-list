
class LocalStorage{

    add(item){
        const books = this.getAll();
        books.push(item);        
        localStorage.setItem('books', JSON.stringify(books));
    }

    remove(item){
        const books = this.getAll();
        books.forEach(function(book, index){
            if(JSON.stringify(book) === JSON.stringify(item)){
                books.splice(index,1);
            }        
        });
        
        if(books.length === 0){
            localStorage.removeItem('books');
        }else{
            localStorage.setItem('books', JSON.stringify(books));
        }                
    }

    getAll(){
        return localStorage.getItem('books') === null ? [] : JSON.parse(localStorage.getItem('books'));
    }
}
//*/


const b1 = new Book('1','2','3');
const b2 = new Book('4','5','6');
const b3 = new Book('7','8','9');
//*/

/*
const b1 = {'title':'1','author':'2','isbn':'3'}
const b2 = {'title':'4','author':'5','isbn':'6'};
const b3 = {'title':'7','author':'8','isbn':'9'};
//*/


const localStorageFacade = new LocalStorage();
//const bookList = localStorageFacade.getAll();
//localStorage.setItem('books',JSON.stringify(bookList));
//const myBooks = localStorageFacade.getAll();
//console.log(myBooks.length);
//localStorageFacade.add(b3);

//const b1ls = new Book(bookList[0].title, bookList[0].author, bookList[0].isbn);
//console.log(JSON.stringify(b1ls) == JSON.stringify(b1));

localStorageFacade.remove(b1);
//localStorageFacade.add(b3);

//*/

//localStorageFacade.add(b1);
//console.log(bookList);
//console.log(JSON.parse(JSON.stringify(bookList)));
//*/

//localStorage.setItem('book', JSON.stringify(b1));
//localStorage.removeItem('book');
//console.log(localStorage.getItem('book'));