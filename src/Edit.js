import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Photo from "./Photo";
/**
 * Edit a photo.
 *
 * props:
 *  -photos: array of photo objects like [{photo}, ...]
 *  -handleEdit: function to be called in parent
 *
 * state:
 *  -none
 *
 * RoutesList -> Edit
 */

function Edit({ photos, handleEdit }) {
  const { id } = useParams();
  console.log("id", id)
  console.log("photos", photos)
  const photo = photos.filter(p => p.id === +id);
  console.log("photo in Edit", photo)
  const navigate = useNavigate();

  async function handleClick() {
    await handleEdit(photo[0].key);
    navigate("/");
  }

  return (
    <div className="Edit">
      <Photo photo={photo[0]} />
      <button onClick={handleClick}>Black and White</button>
      <button onClick={handleClick}>Posterize</button>
    </div>
  );
}

export default Edit;
