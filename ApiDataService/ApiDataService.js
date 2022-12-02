import axios from "axios";
import { BACKEND_BASE_URL } from "../Utils/ApiUrl";

export default class ApiDataService {
    static getForumData() {
        return axios.get(BACKEND_BASE_URL)
    }
}
