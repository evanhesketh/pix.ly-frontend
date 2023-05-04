import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

/** API Class
 * 
 * Static class tying together methods used to get/send to to the API.
 */

class PixlyApi {

    /** Get all photos in databas */

    static async getPhotos () {
        let res = await axios.get(`${BASE_URL}/photos`);
        return res.data.photos;
    }

    /** Get a single photo to edit */

    static async getPhoto (id) {
        let res = await axios.get(`${BASE_URL}/photos/${id}`);
        return res.data.photo;
    }

    /** Takes photo, description:
     * 
     *  (cat.jpg, "hi")
     */
    static async uploadPhoto (photo, description) {
        let res = await axios.post(`${BASE_URL}/upload`, {photo, description}, {
            headers: { 'Content-Type': 'multipart/form-data' },
            // transformRequest: formData => formData,
          });
        return 
    }
}