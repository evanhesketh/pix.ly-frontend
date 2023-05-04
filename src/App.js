import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import { useState, useEffect } from "react";
import PixlyApi from "./api";
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";
import PhotoList from "./PhotoList";

/** App
 *
 * Props: none
 *
 * State:
 * photoApiData  : { isLoading, data, errors}
 *    data like:
 *  [		{
			"date": null,
			"id": 1,
			"make": null,
			"model": null,
			"url": "https://s3.amazonaws.com/evanhesketh-pix.ly/John-Digweed-EDCLV-2017-pc-aLIVE-Coverage.jpeg"
		}]
 *
 *
 */
function App() {
  const [photoApiData, setPhotoApiData] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });

  console.log("App state ", photoApiData);

  useEffect(function fetchPhotoData() {
    async function fetchPhotos() {
      const photos = await PixlyApi.getPhotos();
      setPhotoApiData({ isLoading: false, data: photos, errors: null });
    }
    fetchPhotos();
  }, []);

  async function uploadPhoto({ photo }) {
    console.log("inside uploadPhoto", photo)
    const newPhotoData = await PixlyApi.uploadPhoto(photo);
    setPhotoApiData((curr) => ({ ...curr, data: [...curr.data, newPhotoData] }));
  }

  if (photoApiData.isLoading) {
    return <div>Getting photos...</div>;
  }

  async function editPhoto(key) {
    const editedPhotoData = await PixlyApi.editPhoto(key);
    setPhotoApiData((curr) => ({ ...curr, data: [...curr.data, editedPhotoData] }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <SearchForm handleSearchSubmit={handleSearchSubmit} /> */}
        <RouteList handleSave={uploadPhoto} photos={photoApiData.data} handleEdit={editPhoto}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
