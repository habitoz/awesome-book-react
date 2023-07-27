import React, { useState } from 'react';
import Style from './BookForm.module.css';

/* eslint-disable jsx-a11y/anchor-is-valid, react/jsx-curly-brace-presence, react/prop-types */
export default function BookForm({ addBookHandler }) {
  const [form, setForm] = useState({ title: '', category: '' });
  const handleInput = ($e) => {
    setForm((pState) => ({ ...pState, [$e.target.name]: $e.target.value }));
  };
  const addNewBook = ($e) => {
    $e.preventDefault();
    addBookHandler(form);
  };

  return (
    <div className={`${Style.FormContainer}`}>
      <h1 className={`${Style.FormTitle}`}>add new book</h1>
      <form action="" method="post" onSubmit={addNewBook} className={`${Style.Form}`}>
        <input type="text" name="title" placeholder="Book Title" onInput={handleInput} className={`${Style.FormInput}`} />
        <select className={`${Style.FormCategory}`} onChange={handleInput} value={form.category} name="category" placeholder="Category" id="">
          <option value="catagory 1">Cat 1</option>
          <option value="catagory 2">Cat 2</option>
          <option value="catagory 3">Cat 3</option>
          <option value="catagory 4">Cat 4</option>
        </select>
        <button className={`${Style.FormBtn}`} type="submit">Add Book</button>
      </form>
    </div>
  );
}
