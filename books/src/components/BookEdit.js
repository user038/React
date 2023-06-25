import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ onSubmit, book }) {
  const { editBook } = useBooksContext();
  const [value, setValue] = useState(book.title);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    onSubmit();
    editBook(book.id, value);
  };

  return (
    <form onSubmit={handleSave}>
      <label >Title</label>
      <input className="input" value={value} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
