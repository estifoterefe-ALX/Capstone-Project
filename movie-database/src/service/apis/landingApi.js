import axios from "axios";

const landingApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
    },
    params: {
        api_key: "1015980f64c8eb4222da7157e27d3288" // <-- replace this with your TMDb v3 API key
    }
});

export default landingApi;
