import axios from 'axios';
import { fetchAuthSession } from '@aws-amplify/auth';

const instance = axios.create();

instance.interceptors.request.use(
    async (config) => {
        try {
            const session = await fetchAuthSession();
            const token = session.tokens.idToken;
            config.headers.Authorization = token ? `Bearer ${token}` : '';
        } catch (error) {
            console.error('Error fetching auth token', error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
