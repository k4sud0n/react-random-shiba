import axios from 'axios';

export function getAPI() {
    return axios.get('https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
}
