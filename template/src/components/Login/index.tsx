import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { GoogleOauth, GoogleSignout } from "./styles";
import { FcGoogle } from "react-icons/fc";


function Login() {
    const { googleUrl, user, signOut } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <GoogleSignout onClick={signOut}>
                    <FcGoogle />
                    <p>{ user.name }</p>
                </GoogleSignout>
            ) : (
                <GoogleOauth href={googleUrl}>
                    <FcGoogle />
                    <p>Google</p>
                </GoogleOauth>
            )}
        </>
    );
}

export default Login;