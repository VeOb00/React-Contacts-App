import styles from "./CustomButtonGroup.module.css";

const CustomButtonGroup = (props) => {
	return <div className={styles.ButtonGroup}>{props.children}</div>;
};

export default CustomButtonGroup;
