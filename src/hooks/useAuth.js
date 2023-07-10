import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie';
import axios from 'axios';
import { endpoints } from '@/services/api';


export const useAuth = () => {
	const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const getProfile = async () => {
        try {
            const dataProfile = await axios.get(endpoints.auth.getProfile);
            if(dataProfile.data){
                setUser(dataProfile.data);
                router.push('/dashboard')
            }
        } catch (e) {
            setError("getting-profile");
        }
    };

    const getTokenFromCookie = () => {
        const token = Cookie.get('token');
        if (token) {
            axios.defaults.headers.Authorization = `Bearer ${token}`;
            getProfile();
            return true;
        } else {
            return false;
        }
    };

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
                getProfile();
            }
        } catch (e) {
            setError("invalid-credentials");
        }
	};

	return {
		user,
		signIn,
        error,
        getTokenFromCookie,
	};
};