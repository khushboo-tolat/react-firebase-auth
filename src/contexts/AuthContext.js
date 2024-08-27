import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function signup(email, password) {
        setIsAuthenticated(true);
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        setIsAuthenticated(true);
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        setIsAuthenticated(false);
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        isAuthenticated,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}    
        </AuthContext.Provider>
    )
}
