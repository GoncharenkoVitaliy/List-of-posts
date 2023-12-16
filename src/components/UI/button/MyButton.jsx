import styles from './MyButton.module.css'

export function MyButton({children, ...props}) {
    return (
        <button {...props} className={styles.myButton}>
            {children}
        </button>
    )
}