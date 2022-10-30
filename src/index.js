let myLibrary = [];

const inputModal = document.querySelector(".input-modal");

function Book(title, author, date, category, pages, read) {
  this.title = title;
  this.author = author;
  this.date = date;
  this.category = category;
  this.pages = pages;
  this.read = read;
  console.log(
    `Book ${title} by ${author} from ${date} in the ${category} category with a length of ${pages} pages added to library and it is ${
      read ? "already read" : "not read"
    }`
  );
}

function addBookToLibrary() {
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;
  const date = document.querySelector("#bookDate").value;
  const category = document.querySelector("#bookCategory").value;
  const pages = document.querySelector("#bookPages").value;
  const read = document.querySelector("#bookIsRead").checked;
  console.log(read);

  let newBook = new Book(title, author, date, category, pages, read);
  myLibrary.push(newBook);
}

const addNewBook = document.querySelector(".add-new-book");
addNewBook.addEventListener("click", () => {
  inputModal.style.display = "flex";
  addNewBook.style.display = "none";
});

const addBookButton = document.querySelector(".add-book-btn");
addBookButton.addEventListener("submit", (e) => {
  e.preventDefault();
});

const displayLibrary = () => {
  inputModal.style.display = "none";
  const libraryContainer = document.querySelector(".library-container");
  libraryContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookContainer = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookDate = document.createElement("p");
    const bookCategory = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");

    bookContainer.classList.add("book-container");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookDate.classList.add("book-date");
    bookCategory.classList.add("book-category");
    bookRead.classList.add("book-read");
    bookPages.classList.add("book-pages");

    bookTitle.textContent = `Book title: ${book.title}`;
    bookAuthor.textContent = `Book author: ${book.author}`;
    bookDate.textContent = `Release date: ${book.date}`;
    bookCategory.textContent = `In the category of ${book.category}`;
    bookPages.textContent = `Number of pages: ${book.pages}`;
    bookRead.textContent = `And the book is ${
      book.read ? "already read" : "not read"
    }`;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookDate);
    bookContainer.appendChild(bookCategory);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(bookRead);
    libraryContainer.appendChild(bookContainer);
  });
};

const form = document.querySelector(".addBook-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayLibrary();
  addNewBook.style.display = "block";
});
