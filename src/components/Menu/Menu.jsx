import styles from './Menu.module.css'

function Menu() {
    return (
        <div className={styles.Menu}>
            <p>Save Game</p>
            <p>Quite Game</p>
            <p>View Rules</p>
        </div>
    )
}

export default Menu