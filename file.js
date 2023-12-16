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
addBookToMyLibrary("Akira","Dragon Ball",300,false);
addBookToMyLibrary("Akira","Dragon Ball Z",300,true);
addBookToMyLibrary("Ale","Mi vida",300,false);

function showBooksOnScreen(books){
    const bookcase = document.querySelector('#library');
    let bookIndex = 0
    books.forEach(element => {
        const newBookBox = document.createElement('div');
        newBookBox.className = "book-box";
        newBookBox.id = "book"+bookIndex;
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
        newBookBox.appendChild(buttonBox);
        
        if (element.read) 
            buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span ><svg class='eye read' id='"+bookIndex+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' /></svg></span><span></span><svg class='trash' id='"+bookIndex+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")
        else
            buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span ><svg class='eye no-read' id='"+bookIndex+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>eye-off-outline</title><path d='M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z' /></svg></span><span></span><svg class='trash' id='"+bookIndex+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")   
        
        bookIndex++;
    });
}

function showOneBooksOnScreen(book){
    const bookcase = document.querySelector('#library');
    let id = myLibrary.length-1; 

    const newBookBox = document.createElement('div');
    newBookBox.className = "book-box";
    newBookBox.id = "book"+String(id);
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
    newBookBox.appendChild(buttonBox);

    if (book.read) 
        buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span ><svg class='eye' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' /></svg></span><span></span><svg class='trash' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")
    else
        buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span ><svg class='eye' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>eye-off-outline</title><path d='M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z' /></svg></span><span></span><svg class='trash' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")   
   
    const delateLastButton = document.querySelector('#book'+id+' .trash');
    const eyeLastButton = document.querySelector('#book'+id+' .eye');

    eyeLastButton.addEventListener('click', changeReadStatus);
    delateLastButton.addEventListener('click', delateBook);

    console.log(delateLastButton);
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
    const numPages = Number(formData.get('n-pages'));
    let read = formData.get('book-read');
    if (read === 'on')
        read = true;
    else
        read = false;
    
    addBookToMyLibrary(author,bookName,numPages,read);
    showOneBooksOnScreen(myLibrary[myLibrary.length - 1]);
    form.reset();
    event.preventDefault();
};

function delateBook() {
    let id = this.id;
    const bookBox = document.querySelector('#book'+id);
    const trash= document.querySelector('#book'+id+' .trash');
    bookBox.id="deleted";
    trash.id="deleted";
    bookBox.style = "display: none";
    console.log(id);
    
    myLibrary[id]="";
    console.table(myLibrary);
}

function changeReadStatus() {
    let id = this.id;
    const buttonBox = document.querySelector('#book'+id+' .book-box-buttons');

    if (myLibrary[id].read) {
        myLibrary[id].read=false;
        buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span ><svg class='eye no-read' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>eye-off-outline</title><path d='M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z' /></svg></span><span></span><svg class='trash' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")   
    }
    else {
        myLibrary[id].read=true;
        buttonBox.insertAdjacentHTML("afterend","<div class='book-box-buttons'><span ><svg class='eye read' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z' /></svg></span><span></span><svg class='trash' id='"+id+"' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>trash-can-outline</title><path d='M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z' /></svg></span></div>")
    }
    //eyeButton[index].addEventListener('click', changeReadStatus);
    buttonBox.remove();
    
    const eyeButton = document.querySelector('#book'+id+' .eye');
    const delateButton = document.querySelector('#book'+id+' .trash');

    eyeButton.addEventListener('click', changeReadStatus);
    delateButton.addEventListener('click', delateBook);

    console.table(myLibrary[id].read);
}

form.addEventListener('submit', onSubmit);

for (let index = 0; index < myLibrary.length; index++) {
    const eyeButton = document.querySelector('#book'+index+' .eye');
    const delateButton = document.querySelector('#book'+index+' .trash');

    delateButton.addEventListener('click', delateBook);
    eyeButton.addEventListener('click', changeReadStatus);
}

function updateID (){
    const bookBox = document.querySelectorAll('.book-box');
    const delateButton = document.querySelectorAll('.trash');
    let newIndex = 0;
    for (let index = 0; index < myLibrary.length; index++) {
        if (delateButton[index].id !== "deleted"){
            bookBox[index].id = "book"+newIndex;
            delateButton[index].id = newIndex;
            newIndex++;
        }
    }
}
