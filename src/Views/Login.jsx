import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
function Login() {
    return(
        <>
        <Link to ="/">
        <AiFillHome />
        </Link>
        <h1>Please Login</h1>
        </>
    )
}
export default Login