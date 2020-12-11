import axios from 'axios';


const result = await authAxios.get(`$/`);


const authAxios = axios.create({
    baseURL: apiUr,
    headers:{
        Authorization: `Barer ${accesToken}`
    }
})