'use client';
import { useState, createContext, useContext } from 'react';
import { useAuth } from '@/hooks/useAuth';

const StateContext = createContext();


export const StateContextProvider = ({children}) => {

    // Auth Context
    const {
        user: useAuthUser,
        signIn: useAuthSignIn,
        error: useAuthError,
        getTokenFromCookie: useAuthGetTokenFromCookie,
    } = useAuth();

    return (
        <StateContext.Provider value={{
            useAuthUser,
            useAuthSignIn,
            useAuthError,
            useAuthGetTokenFromCookie,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);