import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        if(token){
            return true;
        }
    },
    singin: async (email: string, senha: string) => {
        const response = await api.post('/auth/login', {email, senha});
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
    cadastrar: async (params: object) => {
        const response = await api.post('/usuario', params);
        return response.data;
    },
})