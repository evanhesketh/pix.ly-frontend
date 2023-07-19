import { useState, ChangeEvent, FormEvent } from "react";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import "./UploadForm.css";

const INITIAL_FORM_DATA = { photo: null, errors: null };

interface FormDataInterface {
  photo: File | null,
  errors: null | any[]
}

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
function UploadForm({ handleSave }: {handleSave: (photo: File) => Promise<void>}) {
  const [formData, setFormData] = useState<FormDataInterface>(INITIAL_FORM_DATA);
  const navigate = useNavigate();

  console.log("formData in UploadForm", formData);

  /** Update form input. */
  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const input = evt.target;

    setFormData((formData) => ({
      ...formData,
      [input.name]: input?.files?.[0],
    }));

  }

  /** Call parent function and redirect home on success, otherwise display errors. */
  async function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    try {
      await handleSave(formData.photo!);
      navigate("/");
    } catch (err: any) {
      setFormData({ ...formData, errors: [err.message] });
    }

  }

  //TODO: look into useRef hook
  return (
    <div className="UploadForm d-flex flex-column align-items-center justify-content-center">
      <h3>Upload a photo!</h3>
      {formData.errors &&
        formData.errors.map((error, idx) => (
          <Alert key={idx} error={error} type="alert-danger" />
        ))}
      <form className="UploadForm-form Form d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        <label className="UploadForm-label" htmlFor="UploadForm-photo">Choose a JPEG file to upload</label>
        <input
          className="form-control"
          type="file"
          id="UploadForm-photo"
          name="photo"
          aria-label="Photo"
          onChange={handleChange}
        />
        <button className="UploadForm-uploadBtn btn btn-primary ">
          Upload
        </button>
        {/* <label htmlFor="UploadForm-description">Describe your photo</label>
        <input
          className="form-control"
          id="UploadForm-description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Decription"
        /> */}
      </form>
    </div>
  );
}

export default UploadForm;
