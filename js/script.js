let myLibrary = [];

function Book(title, author, pagenumber, haveRead) {
    this.title = title
    this.author = author
    this.pagenumber = pagenumber
    this.haveRead = haveRead
    this.getInfo = function() {
        return title +"\r\n"+ "by\r\n" + author + "\r\n" + 
        pagenumber + " pages" + "\r\n" + haveRead
    }
}

function addBooktoLibrary(book, library) {
    library.push(book);
}

function displayBook(book, lib) {
        const wrapper = document.querySelector("#wrapper");
        const div = document.createElement("div");
        div.className="text";
        const span = document.createElement("span");
        span.textContent= book.getInfo();
        div.appendChild(span);
        div.dataset.indexNumber = lib.indexOf(book);
        const removebtn = document.createElement("button");
        removebtn.dataset.index = lib.indexOf(book);
        removebtn.textContent = "Remove book";
        removebtn.className = "removebutton";
        div.appendChild(removebtn);
        removebtn.addEventListener('click', () => {
            var deletebook = confirm("Do you want to remove this book?");
            if (deletebook) {
                lib.splice(div.dataset.indexNumber,1);
                div.remove();
            }
        });
        
        wrapper.appendChild(div);
    
}

function openForm() {
    document.getElementById("form-popup").style.display = "block";
  }

function closeForm() {
    document.getElementById("form-popup").style.display= "none";
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 299, "have not read");
const book2 = new Book("The Abradizil", "Andrew Gibson", 168, "have read");
const book3 = new Book("In Search of the Multiverse", "John Gribbin", 240, "have read");
addBooktoLibrary(book1, myLibrary);
addBooktoLibrary(book2, myLibrary);
addBooktoLibrary(book3, myLibrary);

for (var book of myLibrary) {
    displayBook(book, myLibrary);
}

const addbtn = document.getElementById("addbook");
addbtn.addEventListener('click', openForm);
const cancelbtn = document.getElementById("cancelbtn");
cancelbtn.addEventListener('click', closeForm);
const submitbtn = document.getElementById("submitbtn");

submitbtn.addEventListener('click', () => {
    const title = document.getElementsByName("title")[0].value; 
    const author = document.getElementsByName("author")[0].value; 
    const pagenumber = document.getElementsByName("pagenum")[0].value; 
    const readstatus = document.getElementsByName("readstatus")[0].value;
  
    console.log(author);
    console.log(pagenumber);
    console.log(readstatus);
    console.log(title);
    
    console.log(myLibrary);
    const  new_book = new Book(title, author, pagenumber, readstatus);
    console.log(myLibrary);
    addBooktoLibrary(new_book, myLibrary);
    displayBook(new_book, myLibrary);
    closeForm();
});