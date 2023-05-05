import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Alert from "./Alert";
import "./Edit.css";

/**
 * Edit a photo.
 *
 * props:
 *  -photos: array of photo objects like [{photo}, ...]
 *  -handleEdit: function to be called in parent
 *
 * state:
 *  -error: {error: ""}
 *
 * RoutesList -> Edit
 */

function Edit({ photos, handleEdit }) {
  const [error, setErrors] = useState({ error: "" });

  console.log("error state", error);

  const { id } = useParams();
  console.log("id", id);
  console.log("photos", photos);
  const photo = photos.filter((p) => p.id === +id);
  console.log("photo in Edit", photo);
  const navigate = useNavigate();

  async function handleClick(evt) {
    try {
      await handleEdit(photo[0].largeUrl, evt.target.id);
      navigate("/");
    } catch (err) {
      console.log("error in edit", err);
      setErrors({ error: err.message });
    }
  }

  return (
    <div className="Edit text-center">
      {error.error && <Alert error={error.error} type="alert-danger" />}
      <h4 className="Edit-heading">Choose a filter to apply to your image</h4>
      <Photo photo={photo[0]} url={photo[0].largeUrl} />
      <button className="btn btn-secondary" onClick={handleClick} id='bw'>
        Black and White
      </button>
      <button className="btn btn-secondary" onClick={handleClick} id='posterize'>Posterize</button>
    </div>
  );
}

export default Edit;
