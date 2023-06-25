import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const {createBook} = useBooksContext();
  const [title, setTitle] = useState("");

  const handleChange=(event)=>{
    event.preventDefault();
    setTitle(event.target.value);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    createBook(title);
    setTitle("");
  }

  return (
    <div className= 'book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input className = 'input' value={title} required={true} onChange={handleChange} />
        <button className = 'button'>Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
