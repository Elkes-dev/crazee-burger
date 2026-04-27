import styles from "../TextInput/TextInput.module.css"

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <div className={styles.inputWithIcon}>
        {Icon && <span className={styles.icon}>{Icon}</span>}
      <input
             className={styles.input}
             value={value}
             onChange={onChange}
             type="text"
             {...extraProps}
       />

    </div>
  )
}
