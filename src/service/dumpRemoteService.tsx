import axios from "axios";

const baseUrlImage = 'https://dummyjson.com/image'

export const getImageBannerTemp = async () => {

    try {
        const response = await axios.get(`${baseUrlImage}/1920x1080`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}