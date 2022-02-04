import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ModalContext } from "./modal";
import { SubscribeContext } from "./subscribe";
import { toast } from 'react-toastify';

type User = {
    _id: string;
    name: string;
    email: string;
    picture: string;
    signature: boolean;
    signatureID: string;
}

type AuthContextData = {
    googleUrl: string;
    user: User | null;
    signOut: () => void;
    news: Array<NewsArticle>;
}

type NewsArticle = {
    author: string;
    title: string;
    description: string;
    content: string;
    publishedAt: string;
    url: string
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
        signature: boolean;
        signatureID: string;
    }
}

export function AuthProvider(props: AuthProvider) {
    const { setScroll } = useContext(ModalContext);
    const { setPaid, setSignatureID, paid } = useContext(SubscribeContext);

    const [user, setUser] = useState<User | null>(null);
    const [news, setNews] = useState<Array<NewsArticle>>([]);

    
    const clientId = "";

    const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000&prompt=consent&response_type=code&client_id=${clientId}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline`;
    
    const notify = (msg: string) => toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    async function signIn(code: string) {
        const response = await api.post<AuthResponse>("authorization", {
            code: code
        });

        const { token, customer } = response.data;
        
        localStorage.setItem("newtoken", token);
        
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        
        setUser(customer);

        notify("Login realizado!");

        if(customer.signature){
            setScroll(true);
            setPaid(true);
            setSignatureID(customer.signatureID);
        }
    }

    function signOut() {
        setUser(null);

        localStorage.removeItem("newtoken");

        setScroll(false);
        setPaid(false);

        notify("Logout realizado!");
    }

    useEffect(() => {
        const token = localStorage.getItem("newtoken");

        if(token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`;

            api.get<User>("profile").then(response => {
                setUser(response.data);

                if(response.data.signature) {
                    setScroll(true);
                    setPaid(true);
                    setSignatureID(response.data.signatureID);
                }
            });
        }
    },[]);

    useEffect(() => {
        api.post("newsletter", {
            pageSize: paid ? "30" : "4" 
        }).then(res => {
            setNews(res.data.articles);
        });
    }, [paid]);

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
        <AuthContext.Provider value={{ googleUrl, user, signOut, news }}>
            {props.children}
        </AuthContext.Provider>
    );
}