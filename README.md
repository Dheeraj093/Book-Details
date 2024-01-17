Book Management System README


Project Overview

This project is a simple Book Management System built using React for the frontend and a Node.js backend with Express. The system allows users to add, view, update, and delete books. Additionally, it integrates with an external API to search for external books.

Features

Add Book:

Users can add a new book to the system by providing details such as name, ISBN, authors, country, number of pages, publisher, and release date.


View Books:

The system displays a list of all books, including details like name, ISBN, authors, number of pages, country, publisher, and release date.


Search Books:

Users can search for books by name, and the system will display the matching results.


Update Book:

Users can edit the details of a book by navigating to the update page and modifying the necessary information.


Delete Book:

Users can delete a book from the system, removing it permanently.


External Book Search:

The system integrates with an external API to search for books from an external source.


Project Structure


The project is organized into different components:

AddBookForm:

Component for adding new books.


BookCard:

Component to display details of a book, including options to edit or delete.


BookSearchPage:

Page for searching and displaying books, with an option to search external books.


UpdateBook:

Component for updating the details of a book.


Navbar:

Navigation bar for easy access to different pages.


Getting Started

Clone the repository:

bash

Copy code

git clone <repository_url>

Install dependencies:

bash

Copy code

cd <project_directory>

npm install

Run the application:

bash

Copy code

npm start


The application will be accessible at http://localhost:3000.

Dependencies

React: A JavaScript library for building user interfaces.

Axios: A promise-based HTTP client for making API requests.

React Router: A routing library for navigation within the React application.

API Endpoints

GET /api/v1/books/getBooks:

Fetch all books.

GET /api/v1/books/getBookById/:id:

Fetch details of a specific book by ID.

POST /api/v1/books/createBook:

Add a new book.

PATCH /api/v1/books/updateBook/:id:

Update the details of a book by ID.

DELETE /api/v1/books/deleteBook/:id:

Delete a book by ID.

GET /api/external-books/getExternalBooks:

Fetch external books from an external API.

Important Note

This project assumes the availability and proper functioning of the backend API at the specified URLs. Make sure the backend is running and accessible.
Feel free to explore and enhance the project based on your requirements. Happy coding!
