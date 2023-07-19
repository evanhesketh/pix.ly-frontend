import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import { useState, useEffect } from "react";
import PixlyApi from "./api";
import NavBar from "./NavBar";
import { PhotoApiDataInterface, PhotoInterface } from "./interfaces";

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
			"url": "https://s3.amazonaws.com/evanhesketh-pix.ly/trees.jpeg"
		}]
 *
 *
 */
function App() {
  const [photoApiData, setPhotoApiData] = useState<PhotoApiDataInterface>({
    data: [],
    isLoading: true,
    errors: null,
  });

  console.log("App state ", photoApiData);

  useEffect(function fetchPhotoData() {
    async function fetchPhotos() {
      try{
        const photos: PhotoInterface[] = await PixlyApi.getPhotos();
        setPhotoApiData({ isLoading: false, data: photos, errors: null });
      } catch (err) {
        setPhotoApiData({isLoading: false, data: [], errors: [err]})
      }
    }
    fetchPhotos();
  }, []);

  async function uploadPhoto({ photo }: {photo: File}) {
    const newPhotoData: PhotoInterface = await PixlyApi.uploadPhoto(photo);
    setPhotoApiData((curr) => ({ ...curr, data: [...curr.data, newPhotoData] }));
  }

  if (photoApiData.isLoading) {
    return <div>Getting photos...</div>;
  }

  if (photoApiData.errors) {
    console.log(photoApiData.errors[0]);
    return <div>Sorry, something went wrong.</div>;
  }

  async function editPhoto(fileName: String, method: String) {
      const editedPhotoData: PhotoInterface = await PixlyApi.editPhoto(fileName, method);
      setPhotoApiData((curr) => ({ ...curr, data: [...curr.data, editedPhotoData] }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouteList handleSave={uploadPhoto} photos={photoApiData.data} handleEdit={editPhoto}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
