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
            const { data } = await axios.post(endpoints.auth.login, { email, password }, options);
            data ? console.log(data.access_token) : console.log('No data');
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