import axios from "axios";

const api = axios.create({
    baseURL: 'https://agroclima-api.onrender.com'
});

export const useApi = () => ({
    validateToken: async (token) => {
        if(token){
            return true;
        }
    },
    singin: async (email, senha) => {
        const response = await api.post('/auth/login', {email, senha});

        if(response.status == 200) {
            localStorage.setItem("TOKEN", response.data.token)
        }

        console.log(localStorage.getItem("TOKEN"))

        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
    cadastrar: async (params) => {
        const response = await api.post('/usuario', params);
        return response.data;
    },
})