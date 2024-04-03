import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Header.css"
function Header(params) {
    
    return(<div  class="card card-container">
           <h2>Log in:</h2>
        <Link to='/login'>
        <MdAccountBox size={70}  />
        </Link>
        </div>
    )
    
}
export default Header