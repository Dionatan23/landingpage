import styles from "./input.module.scss"

export default function TextInput({type, placeholder, pattern, required}) {
    return (
        <input 
        className={styles.input} 
        type={type} 
        placeholder={placeholder} 
        pattern={pattern}
        required={required} />
    )
}