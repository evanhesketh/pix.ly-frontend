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

    static async uploadPhoto (photo) {
        console.log("inside uploadPhoto, ", photo)
        const formData = new FormData();
        formData.append("photo", photo);
        console.log("formData object ", formData)
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };

        const url = `${BASE_URL}/upload`;

        let res = await axios.post(url, formData, config);

        return res.data.photo;
    }

    /** Create a new photo by editing current photo */

    static async editPhoto(key) {
        console.log("key in edit photo", key)
        try {
            let res = await axios.post(`${BASE_URL}/edit`, {"key": key});
            return res.data.photo;
        } catch(err) {
            throw new Error("Image already exists")
        }
    }
}

export default PixlyApi;