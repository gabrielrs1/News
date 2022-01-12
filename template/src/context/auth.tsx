import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    _id: string;
    name: string;
    email: string;
    picture: string;
}

type AuthContextData = {
    googleUrl: string;
    user: User | null;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    customer: {
        _id: string;
        name: string;
        picture: string;
        email: string;
    }
}

export function AuthProvider(props: AuthProvider) {
    const [user, setUser] = useState<User | null>(null);

    const googleUrl = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000&prompt=consent&response_type=code&client_id=157801454638-ifqndn3rpp2ils6ovh9f1537f0jr80np.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline";
    
    async function signIn(code: string) {
        const response = await api.post<AuthResponse>("authorization", {
            code: code
        });

        const { token, customer } = response.data;
        
        localStorage.setItem("newtoken", token);
        
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        
        setUser(customer);
    }

    function signOut() {
        setUser(null);

        localStorage.removeItem("newtoken");
    }

    useEffect(() => {
        const token = localStorage.getItem("newtoken");

        if(token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<User>("profile").then(response => {
                setUser(response.data);
            });
        }
    },[]);

    useEffect(() => {
        const url = window.location.href;

        // pega a url se possuir o parametro do code
        const hasGithubCode = url.includes("?code=");

        if(hasGithubCode) {
            // separa a url na rota principal e o codigo
            const [urlWithoutCode, githubCode1] = url.split("?code=");
            const [githubCode2,] = githubCode1.split("&");
            
            // apagar a antiga url e adiciona a padrao
            window.history.pushState({}, "", urlWithoutCode);

            signIn(githubCode2);
        }
    },[]);

    return (
        <AuthContext.Provider value={{ googleUrl, user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    );
}