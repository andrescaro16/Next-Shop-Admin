'use client';
import { useState, createContext, useContext } from 'react';
import { useAuth } from '@/hooks/useAuth';

const StateContext = createContext();


export const StateContextProvider = ({children}) => {

    const { user: useAuthUser, signIn: useAuthSignIn, error: useAuthError } = useAuth();


    return (
        <StateContext.Provider value={{
            useAuthUser,
            useAuthSignIn,
            useAuthError,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);