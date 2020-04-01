import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': ' Bearer BQCcLCSKhzIpw7O5qs3uZ7pIT4wpbSVRfDG4eQnZbEeo_eAd-soKqhWChavmvLskHP1-EmSB1H3W_zMsr51GZsE4LUdaVNSujeFsO1TCa4SGW62vDEh3aFrfoZcoxRO5-JqQ6rdW9ZmGEcBlbkrmVaTr2gJJag'
    }
});

export default instance;