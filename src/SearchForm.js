import { useState } from "react";

/**
 * Form for searching by search term.
 *
 * props:
 *  -handleSearchSubmit - function to be called in parent on form submission
 *
 * state:
 *  -formData - object like {term: "officer"}
 *
 * App -> SearchForm
 */

function SearchForm({ handleSearchSubmit }) {
  const [formData, setFormData] = useState("");

  /** Update form input. */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearchSubmit(formData.trim());
    setFormData("");
  }

  return (
    <div className="SearchForm row">
      <form className="SearchForm-form col-6 d-flex" onSubmit={handleSubmit}>
        <label htmlFor="SearchForm-input" />
        <input
          className="form-control"
          id="SearchForm-input"
          name="term"
          placeholder="Enter search term..."
          onChange={handleChange}
          value={formData}
          aria-label="Term"
        />
        <button className="SearchForm-submitBtn btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
