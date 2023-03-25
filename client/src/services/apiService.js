import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const getRuns = () => {
    return axios.get(baseUrl);
};

export const submitRun = (data) => {
    const runner = data.runner
    const hours = parseInt(data.hours)
    const minutes = parseInt(data.minutes)
    const seconds = parseInt(data.seconds)
    return axios.post(baseUrl, {runner, hours, minutes, seconds});
};