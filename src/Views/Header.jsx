import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";
function Header(params) {
    
    return(
        <Link to='/login'>
        <MdAccountBox />
        </Link>
    )
    
}
export default Header