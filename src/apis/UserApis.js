import { API_URL } from "./URLs"
import AxiosInterceptor from "../interceptors";

export default {
    getUsers() {
        return AxiosInterceptor.get(API_URL.USERS);
    }
}