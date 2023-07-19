import axios from "axios";
import { PhotoInterface } from "./interfaces";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

/** API Class
 *
 * Static class tying together methods used to get/send to to the API.
 */

class PixlyApi {
  /** Get all photos in databas */

  static async getPhotos(): Promise<PhotoInterface[]> {
    let res = await axios.get(`${BASE_URL}/photos`);
    return res.data.photos;
  }

  /** Get a single photo to edit */

  static async getPhoto(id: Number): Promise<PhotoInterface> {
    let res = await axios.get(`${BASE_URL}/photos/${id}`);
    return res.data.photo;
  }

  /** Takes photo, description:
   *
   *  (cat.jpg, "hi")
   */

  static async uploadPhoto(photo: File): Promise<PhotoInterface> {
    const formData = new FormData();
    formData.append("photo", photo);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const url = `${BASE_URL}/upload`;
    try {
      let res = await axios.post(url, formData, config);
      return res.data.photo;
    } catch (err) {
      throw new Error("Image already exists");
    }
  }

  /** Create a new photo by editing current photo */

  static async editPhoto(
    fileName: String,
    method: String
  ): Promise<PhotoInterface> {
    try {
      let res = await axios.post(`${BASE_URL}/edit`, {
        fileName: fileName,
        method: method,
      });
      return res.data.photo;
    } catch (err) {
      throw new Error("Image already exists");
    }
  }
}

export default PixlyApi;
