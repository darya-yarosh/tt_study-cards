import styles from "./IconButton.module.scss";

export default function IconButton({ iconSrc, onClick, alt, withBG }) {
	return (
		<button
			className={withBG ? styles.wrapperBG : styles.wrapper}
			onClick={onClick}
		>
			<img className={styles.icon} src={iconSrc} alt={alt} />
		</button>
	);
}
