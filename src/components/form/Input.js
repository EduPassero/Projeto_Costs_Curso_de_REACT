import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange}){
    return(
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}: </label>
        <input
            name={name}
            id={name}
            type={type} 
            placeholder={placeholder} 
            onChange={handleOnChange}>
        </input>
    </div>
    )
}

export default Input