import { useState, createContext, useContext } from 'react';
import { useAuth } from '@/hooks/useAuth';

const StateContext = createContext();


export const StateContextProvider = ({children}) => {

    const { user: useAuthUser, signIn: useAuthSignIn } = useAuth();


    return (
        <StateContext.Provider value={{
            useAuthUser,
            useAuthSignIn,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);