import { Link } from "react-router-dom";
import "./Photo.css";
import { PhotoInterface } from "./interfaces";

/** Photo
 *
 * Presentational component: shows photo as link to editor
 *
 * Props:
 * - photo : {id, url, make, model, date, }
 *
 * State: none
 *
 * PhotoList --> Photo
 */

//TODO: need description field
//TODO: style photo info

function Photo({ photo }: {photo: PhotoInterface}) {
  const { id, url, make, model, date, } = photo;

  return (
    <div className="Photo">
      <Link to={`/edit/${id}`}>
        <img className="Photo-image" src={url} alt="Nothing to display" />
      </Link>
      <ul className="Photo-info">
        {make && <li>Make: {make}</li>}

        {model && <li>Model: {model}</li>}

        {date && <li>Date: {date}</li>}
      </ul>
    </div>
  );
}

export default Photo;
