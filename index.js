const librayContainer = document.getElementById("libraryContainer");
const formContainer = document.getElementById("formContainer");
const addBookBtn = document.getElementById("addBookBtn");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Add some sample books
addBookToLibrary("The Obbit", "J.R.R. Tolkien", 300, false);
addBookToLibrary("Tout Javascript", "Olivier Hondermarck", 384, false);
addBookToLibrary("Deep Work", "Cal Newport", 265, false);
addBookToLibrary(
  "Big data",
  "Viktor Mayer-Schönberger, Kenneth Cukier",
  256,
  false
);

function displayBook() {
  librayContainer.innerHTML = "";

  //create an unordered list to hold the library
  const bookList = document.createElement("ul");

  //Iterate through each book in library
  myLibrary.forEach((book) => {
    //create list item for each book
    const bookItem = document.createElement("li");

    //Display book information
    bookItem.innerHTML = `<li>Title: ${book.title}</li>
    <li>Author: ${book.author}</li>
    <li>Pages: ${book.pages}</li>
    <li>Read: ${book.read}</li>`;

    // Append book item to the list
    bookList.appendChild(bookItem);

    librayContainer.appendChild(bookList);
  });
}

// form button
function showForm() {
  formContainer.style.display = "block";
}

// AddNewBook function
function addNewBook(e) {
  e.preventDefault();
  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  //Hide the form
  formContainer.style.display = "none";

  // refresh the display

  displayBook();
}

// Display the library
displayBook();
