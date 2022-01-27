import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { GoogleOauth, GoogleSignout } from "./styles";
import { FcGoogle } from "react-icons/fc";


function Login() {
    const { googleUrl, user, signOut } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <GoogleSignout onClick={signOut} title="Sair">
                    <img className="avatar" src={user.picture} />
                    <p>{user.name}</p>
                </GoogleSignout>
            ) : (
                <GoogleOauth href={googleUrl} title="Entrar">
                    <FcGoogle />
                    <p>Google</p>
                </GoogleOauth>
            )}
        </>
    );
}

export default Login;