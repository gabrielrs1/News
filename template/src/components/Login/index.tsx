import { GoogleOauth } from "./styles";
import { FcGoogle } from "react-icons/fc";

function Login() {
    const url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/google/callback&prompt=consent&response_type=code&client_id=157801454638-ifqndn3rpp2ils6ovh9f1537f0jr80np.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&access_type=offline";

    return (
        <GoogleOauth href={url}>
            <FcGoogle />

            <p>Google</p>
        </GoogleOauth>
    );
}

export default Login;