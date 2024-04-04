import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
function Header(params) {
    
    return(<div  class={styles.card}>
           <h2>Log in:</h2>
        <Link to='/login'>
        <MdAccountBox size={70}  />
        </Link>
        </div>
    )
    
}
export default Header