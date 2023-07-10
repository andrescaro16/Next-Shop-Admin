import { useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { endpoints } from '@/services/api';

export const useAuth = () => {
	const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

	const signIn = async ({ email, password }) => {
        const options = {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(endpoints.auth.login, { email, password }, options);
            if(res.data){
                const token = res.data.access_token;
                Cookie.set('token', token, { expires: 5 });
                axios.defaults.headers.Authorization = `Bearer ${token}`;
                const dataProfile = await axios.get(endpoints.auth.getProfile);
                if(dataProfile.data){
                    setUser(dataProfile.data);
                }
            }
        } catch (error) {
            setError(error);
        }
	};

	return {
		user,
		signIn,
        error,
	};
};