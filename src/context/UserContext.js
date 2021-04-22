import { createContext, useState } from 'react';

export const UserContext = createContext();

export const ThemeProvider = props => {

    const [userDetails, setUserDetails] = useState({
        'authenticated': false,
        'refresh': null,
        'access': null,
    });

    return (
        <UserContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </UserContext.Provider>

    );
}