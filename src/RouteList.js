import { Routes, Route, Navigate } from "react-router-dom";
import UploadForm from "./UploadForm";
import PhotoList from "./PhotoList";

/**
 * List of routes for App.
 * For invalid route, renders hompage.
 *
 * props:
 *  -handleSave: function to be called in parent on form submission
 *
 * state:
 *  -none
 *
 * App -> RouteList
 */
function RouteList({ handleSave, photos }) {

  return (
    <Routes>
      <Route path="/" element={<PhotoList photos={photos} />}/>
      <Route path="/upload" element={<UploadForm handleSave={handleSave}/>} />
      {/* <Route path="/edit/:id" element={}/> */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
