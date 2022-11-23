import React from 'react';

import { Books } from 'components/books/Books';
import { Books as BooksRTK } from 'components/booksRTK/Books';

import './App.css';

import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Memixit web app</p>
        <div>Books fetched via RTK query:</div>
        <BooksRTK />
        <div>Books fetched via regular querying:</div>
        <Books />
      </header>
    </main>
  );
};

export default App;
