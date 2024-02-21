import styles from "./Button.module.scss";

export const STYLE_TYPES = {
	confirm: styles.confirm,
	cancel: styles.cancel,
	default: styles.default,
};

export default function Button({ value, onClick, styleType }) {
	return (
		<button className={styles.button + " " + styleType} onClick={onClick}>
			{value}
		</button>
	);
}
