import Photo from "./Photo"

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

function PhotoList({photos}) {
  return (
    <div className="PhotoList">
      {photos.map(photo => <Photo photo={photo}/>)}
    </div>
  );
}

export default PhotoList;