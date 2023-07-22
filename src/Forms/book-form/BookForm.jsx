import React from 'react';
import Style from './BookForm.module.css';

/* eslint-disable jsx-a11y/anchor-is-valid, react/jsx-curly-brace-presence */
export default function BookForm() {
  return (
    <div className={`${Style.FormContainer}`}>
      <h1 className={`${Style.FormTitle}`}>add new book</h1>
      <form action="" method="post" className={`${Style.Form}`}>
        <input type="text" placeholder="Book Title" className={`${Style.FormInput}`} />
        <select className={`${Style.FormCategory}`} name="Catagory" placeholder="Category" id="">
          <option value="catagory1">Cat 1</option>
        </select>
        <button className={`${Style.FormBtn}`} type="submit">Add Book</button>
      </form>
    </div>
  );
}
