import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [error, setError] = useState("");
  //   console.log(author, title, publishedYear);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // const addUser = { title, author, publishedYear };
    const res = await axios.post("http://localhost:3003/book/add-book", {
      title,
      author,
      publishedYear,
    });
    //   const user= await   axios.post("http://localhost:3003/book/add-book", {title, author, year });
    console.log(res);
    // const result = await res.json();
    // console.log(result);
    if (!res.ok) {
      //   console.error(result.error);
      setError(res.error);
      //   console.log(error);
    }
    if (res.ok) {
      console.log(res);
      setError("");
      setAuthor("");
      setTitle("");
      setPublishedYear("");
    }
  };
  return (
    <div className="container my-2">
      {error && (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      )}
      <h1 className="text-center">Enter Data</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Harry Potter"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Mehdi Hasan"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Published Year</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: 1991"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
