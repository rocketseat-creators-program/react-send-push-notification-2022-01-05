import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fcm.googleapis.com/fcm/'
})


api.defaults.headers.authorization = `key=INSIRA AQUI A CHAVE DO SERVIDOR DO PROJETO DO FIREBASE`;
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
