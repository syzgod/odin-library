let myLibrary = [];
let bookIndex;

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
});

const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("submit", (e) => {
  e.preventDefault();
});

const displayLibrary = () => {
  inputModal.style.display = "none";
  const libraryContainer = document.querySelector(".library-container");
  libraryContainer.innerHTML = "";
  libraryContainer.style.display = "flex";
  myLibrary.forEach((book) => {
    bookIndex = myLibrary.indexOf(book);
    const libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML += `
    <div class="book-container flex" data-bookId="${bookIndex}">

    <h3>Book #${bookIndex + 1}: ${book.title}</h3>
      <div class="book-author">Book author: ${book.author}</div>
      <div class="book-date">Release date: ${book.date}</div>
      <div class="book-category">Category: ${book.category}</div>
      <div class="book-pages">Number of pages: ${book.pages}</div>
      <div class="book-read">The book is ${
        book.read
          ? "<span class='bg-green-600 p-1 text-white'>already read</span>"
          : "<span class='bg-red-600 p-1 text-white'>not read yet</span>"
      }</div>
      <div class="card-buttons flex flex-row">
        <button class="btn remove-book">Remove book</button>
        <button class="btn change-read-status ml-3">Change read status</button>
      </div>
    </div>
        `;
    addBookCardButtonsListeners();
  });
};

const addBookCardButtonsListeners = (e) => {
  const removeBook = document.querySelectorAll(".remove-book");
  const changeReadStatus = document.querySelectorAll(".change-read-status");
  removeBook.forEach((button) =>
    button.addEventListener("click", (e) => {
      myLibrary.splice(bookIndex, 1);
      displayLibrary();
    })
  );
  changeReadStatus.forEach((button) =>
    button.addEventListener("click", (e) => {
      myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
      displayLibrary();
    })
  );
};

const form = document.querySelector(".addBook-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayLibrary();
});
