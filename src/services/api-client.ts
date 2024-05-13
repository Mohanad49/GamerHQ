import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '3a5568dbb3d74ccc840ba08bec44f22d'
    }
})