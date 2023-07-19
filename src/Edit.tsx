import { useState, MouseEvent } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Alert from "./Alert";
import "./Edit.css";
import { PhotoInterface } from "./interfaces";

interface EditInterface {
  photos: PhotoInterface[],
  handleEdit: (fileName: String, method: String) => Promise<void>
}

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

function Edit({ photos, handleEdit }: EditInterface) {
  const [error, setErrors] = useState({ error: "" });

  console.log("error state", error);

  const { id } = useParams();
  const photo = photos.filter((p) => p.id === +id!);
  const navigate = useNavigate();

  async function handleClick(evt: MouseEvent<HTMLButtonElement>) {
    try {
      const target = evt.target as HTMLButtonElement;
      await handleEdit(photo[0].fileName, target.id);
      navigate("/");
    } catch (err: any) {
      setErrors({ error: err.message });
    }
  }

  return (
    <div className="Edit text-center">
      {error.error && <Alert error={error.error} type="alert-danger" />}
      <h4 className="Edit-heading">Choose a filter to apply to your image</h4>
      <Photo photo={photo[0]} />
      <button className="btn btn-secondary" onClick={handleClick} id='bw'>
        Black and White
      </button>
      <button className="btn btn-secondary" onClick={handleClick} id='posterize'>Posterize</button>
    </div>
  );
}

export default Edit;
