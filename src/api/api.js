import axios from 'axios';
import { BASE_URL } from '../config/config'

export const api = {
    async fileUpload(file, endpoint) {
        const url = BASE_URL + endpoint;
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            responseType: 'blob',
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const response = await axios.post(url, formData, config);
        return response;
    }
}