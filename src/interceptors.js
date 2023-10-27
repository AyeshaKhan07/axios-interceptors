import axios from "axios";
import { API_BASE_URL, DEFAULT_TOKEN } from "./constants";

const AxiosInterceptor = axios.create({
    baseURL: API_BASE_URL
});

function requestHandler(request) {
    request.headers.Authorization = DEFAULT_TOKEN;
    return request;
}

AxiosInterceptor.interceptors.request.use(
    request => requestHandler(request)
)

export default AxiosInterceptor;