import styles from './SpinnerLoader.module.css'

function SpinnerLoader() {

  return (
    <div className={styles.spinnerLoader}>
        <img src="./sp.svg" />
        <p>loading...</p>
    </div>
  )
}

export default SpinnerLoader