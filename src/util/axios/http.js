import axios from 'axios';
import { API_BASE_URL } from '../../constants.js';

const get = async (url,includeBaseURl = true) => {
    let requestUrl = includeBaseURl  ? API_BASE_URL + url : url;
    try {
        let response = await axios.get(requestUrl);
        return response ? response.data : null;
    } catch (e) {
        notifyError(e);
    } finally {
    }
}
const post = async (url, body,includeBaseURl) => {
    let requestUrl = includeBaseURl  ? API_BASE_URL + url : url;
    try {
        let response = await axios.post(requestUrl, body, { headers });
        return response ? response.data : null;
    } catch (e) {
            notifyError(e);
    } finally {
    }
}





const notifyError = (e) =>  {
    if (e.code == "ERR_NETWORK") {
    } else {
        if (e?.response?.status == '401') {
            throw new Error(e.response.data.message);
        } else {
            // toast.error(e.response.data.message);
        }
    }
}

let http = { get, post };

export default http