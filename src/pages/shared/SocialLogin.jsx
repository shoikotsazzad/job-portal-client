import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    return (
        <div className="m-4"> 
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-soft btn-accent">Google</button>
        </div>
    );
};

export default SocialLogin;