import styles from "../PrimaryButton/PrimaryButton.module.css"

export default function PrimaryButton({className, label , Icon, ...extraProps}) {
  return (
       <button className={className} {...extraProps}>
                <span>{label}</span>
                {Icon && <span className={styles.icon}> {Icon}  </span>}
        </button>
  )
}
