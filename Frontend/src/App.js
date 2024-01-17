import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import BookSearchPage from './Component/BookSearchPage';
import UpdateBook from './Component/UpdateBook';
import AddBookForm from './Component/AddBookForm';
import ExternalBook from './Component/ExternalBook';
import Navbar from './Component/Navbar';


function App() {
  return (
    <Router>
      <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<BookSearchPage/>} />
          <Route path="/addBook" element={<AddBookForm />} />
          <Route path="/:id" element={<UpdateBook/>} />
          <Route path="/externalBooks" element ={<ExternalBook/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;