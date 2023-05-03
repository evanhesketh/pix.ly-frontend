import { useState } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
/** Upload form
 *
 * Form for uploading a new image file
 *
 * Props:
 * - handleSave: function to be called in parent on form submission
 *
 * State:
 * - formData: {photo: photo.jpg, description: This is a beautiful cat}
 *
 * RoutesList -> UploadForm
 *
 *
 */

const INITIAL_FORM_DATA = {photo: null, description: ""};

function UploadForm({handleSave}) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and redirect home on success, otherwise display errors. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleSave(formData);
      navigate("/");
    } catch (err) {
      setFormData({ ...formData, errors: err });
    }
  }

  return (
    <div className="UploadForm Form col-md-4 offset-md-4">
      <h3>Upload a photo!</h3>
      {formData.errors &&
        formData.errors.map((error, idx) => <Alert key={idx} error={error} type="alert-danger"/>)}
      <form className="UploadForm-form " onSubmit={handleSubmit}>
        <label htmlFor="UploadForm-photo">Choose a JPEG file to upload</label>
        <input
          className="form-control"
          type="file"
          id="UploadForm-photo"
          name="photo"
          value={formData.photo}
          aria-label="Photo"
        />
        <label htmlFor="UploadForm-description">Describe your photo</label>
        <input
          className="form-control"
          id="UploadForm-description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Decription"
        />
      </form>
      </div>
  );

}

export default UploadForm;