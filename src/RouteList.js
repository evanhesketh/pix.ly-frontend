import { Routes, Route, Navigate } from "react-router-dom";
import UploadForm from "./UploadForm";
import PhotoList from "./PhotoList";
import Edit from "./Edit";

/**
 * List of routes for App.
 * For invalid route, renders hompage.
 *
 * props:
 *  -handleSave: function to be called in parent on form submission
 *  -handleEdit: function to be called in parent on form submission
 *  -photos: [{id, largeUrl, smallUrl, make, model, date}, ...]
 *
 * state:
 *  -none
 *
 * App -> RouteList
 */
function RouteList({ handleSave, photos, handleEdit }) {

  return (
    <Routes>
      <Route path="/" element={<PhotoList photos={photos} />}/>
      <Route path="/upload" element={<UploadForm handleSave={handleSave}/>} />
      <Route path="/edit/:id" element={<Edit photos={photos} handleEdit={handleEdit}/>}/>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
