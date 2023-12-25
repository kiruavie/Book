const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the author of the book:");
  const pages = prompt("Enter the number of pages:");
  const read = confirm("Have you read this book?");

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  displayLibrary();
}

function displayLibrary() {
  const bookList = document.querySelector(
    ".book-container .book-list .book-container"
  );
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-card");
    bookItem.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read ?:</strong> ${book.read ? "Yes" : "No"}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
          `;
    bookList.appendChild(bookItem);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayLibrary();
}

const addBookButton = document.getElementById("addBookToLibrary");
addBookButton.addEventListener("click", addBookToLibrary);

const newBookButton = document.getElementById("newBookButton");
newBookButton.addEventListener("click", function () {
  const form = document.querySelector(".book-form form");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

const form = document.querySelector(".book-form form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);

  displayLibrary();

  form.reset();
  form.style.display = "none";
});

// Initial books
myLibrary.push(new Book("The Stranger", "Albert Camus", 123, false));
myLibrary.push(
  new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 417, true)
);
myLibrary.push(
  new Book(
    "The Lord of the Rings: The Fellowship of the Ring",
    "J.R.R. Tolkien",
    423,
    false
  )
);

displayLibrary();
