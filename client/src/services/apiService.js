import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const getRuns = () => {
    return axios.get(baseUrl);
};

export const submitRun = (data) => {
    return axios.post(baseUrl, data);
};