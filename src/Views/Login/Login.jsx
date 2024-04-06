
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from './Login.module.css'; // Import CSS module
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    
  };
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        <AiFillHome />
      </Link>
      <h1 className={styles.heading}>Coming soon...with the ability to save your games</h1>
      <h1 className={styles.heading}>Please Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input type="text" id="username" name="username" className={styles.input} placeholder="Enter your username" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={styles.input}
              placeholder="Enter your password"
              required
            />
            {showPassword ? (
              <AiOutlineEyeInvisible className={styles.eyeIcon} onClick={togglePasswordVisibility} />
            ) : (
              <AiOutlineEye className={styles.eyeIcon} onClick={togglePasswordVisibility} />
            )}
          </div>
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Login;