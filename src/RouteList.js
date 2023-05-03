import { Routes, Route, Navigate } from "react-router-dom";
import UploadForm from "./UploadForm";

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
function RouteList({ handleSave }) {

  return (
    <Routes>
      <Route path="/" />
      <Route path="/upload" element={<UploadForm handleSave={handleSave}/>} />
      {/* <Route path="/edit/:id" element={}/> */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
