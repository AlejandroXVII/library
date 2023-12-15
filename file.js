let myLibrary = [];

class book {
    constructor(author, tittle, pages, read) {
        this.author = author;
        this.tittle = tittle;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToMyLibrary (author,tittle,pages,read){
    let oneBook = new book(author, tittle, pages, read); 
    myLibrary.push(oneBook);
}

addBookToMyLibrary("JK","Harry Potter",300,true);
addBookToMyLibrary("Akira","Dragon Ball",300,true);
addBookToMyLibrary("Akira","Dragon Ball Z",300,true);
addBookToMyLibrary("Ale","Mi vida",300,false);

function showBooksOnScreen(books){
    const bookcase = document.querySelector('#library');
    books.forEach(element => {
        
        const newBookBox = document.createElement('div');
        newBookBox.className = "book-box";
        bookcase.appendChild(newBookBox);

        const tittle1 = document.createElement('h3');
        tittle1.textContent = "AUTHOR:";
        newBookBox.appendChild(tittle1);
        const author = document.createElement('h4');
        author.textContent = element.author;
        newBookBox.appendChild(author);

        const tittle2 = document.createElement('h3');
        tittle2.textContent = "BOOK NAME:";
        newBookBox.appendChild(tittle2);
        const tittle = document.createElement('h4');
        tittle.textContent = element.tittle;
        newBookBox.appendChild(tittle);

        const tittle3 = document.createElement('h3');
        tittle3.textContent = "PAGE NUMBERS:";
        newBookBox.appendChild(tittle3);
        const pages = document.createElement('h4');
        pages.textContent = element.pages;
        newBookBox.appendChild(pages);

        const buttonBox = document.createElement('div');
        buttonBox.className = "book-box-buttons";
        newBookBox.appendChild(buttonBox);

        buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span class='eye'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' /></svg></span><span class='trash'></span><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")
    });
}

function showOneBooksOnScreen(book){
    const bookcase = document.querySelector('#library');
        
    const newBookBox = document.createElement('div');
    newBookBox.className = "book-box";
    bookcase.appendChild(newBookBox);

    const tittle1 = document.createElement('h3');
    tittle1.textContent = "AUTHOR:";
    newBookBox.appendChild(tittle1);
    const author = document.createElement('h4');
    author.textContent = book.author;
    newBookBox.appendChild(author);

    const tittle2 = document.createElement('h3');
    tittle2.textContent = "BOOK NAME:";
    newBookBox.appendChild(tittle2);
    const tittle = document.createElement('h4');
    tittle.textContent = book.tittle;
    newBookBox.appendChild(tittle);

    const tittle3 = document.createElement('h3');
    tittle3.textContent = "PAGE NUMBERS:";
    newBookBox.appendChild(tittle3);
    const pages = document.createElement('h4');
    pages.textContent = book.pages;
    newBookBox.appendChild(pages);

    const buttonBox = document.createElement('div');
    buttonBox.className = "book-box-buttons";
    newBookBox.appendChild(buttonBox);

    buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span class='eye'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' /></svg></span><span class='trash'></span><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")
  
}

const newBook = document.querySelector(".newBook h3");
newBook.addEventListener('click', () => {
    const showForm = document.querySelector(".bookForm");
    showForm.style = "display: grid;";
});

const closeNewBook = document.querySelector(".bookForm svg");
closeNewBook.addEventListener('click', () => {
    const showForm = document.querySelector(".bookForm");
    showForm.style = "display: none;";
});

showBooksOnScreen(myLibrary);

const form = document.querySelector('form');

const onSubmit = event => {
    const formData = new FormData(event.target);

    const author = formData.get('author');
    const bookName = formData.get('book-name');
    const numPages = formData.get('n-pages');
    const read = formData.get('book-read');
    
    addBookToMyLibrary(author,bookName,numPages,read);
    showOneBooksOnScreen(myLibrary[myLibrary.length - 1]);
    form.reset();
    event.preventDefault();
};

form.addEventListener('submit', onSubmit);
