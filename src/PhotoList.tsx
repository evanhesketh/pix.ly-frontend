import Photo from "./Photo"
import { PhotoInterface } from "./interfaces";

/** PhotoList
 *
 * Presentational component: shows list of photos
 *
 * Props:
 * - photos : [{id, url, make, model, date}, ...]
 *
 * State: none
 *
 * App --> PhotoList --> Photo
 */

function PhotoList({photos}: {photos: PhotoInterface[]}) {
  console.log("photos ", photos)
  return (
    <div className="PhotoList d-flex flex-wrap">
      {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
    </div>
  );
}

export default PhotoList;