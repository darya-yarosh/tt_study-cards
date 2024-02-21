import { memo } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Card from "./components/Card/Card";
import Button, { STYLE_TYPES } from "./components/Button/Button";

import { saveProps } from "./reducers/root";
import { mapStateToProps } from "./reducers/connect";

import styles from "./App.module.scss";

function App() {
	const dispatch = useDispatch();

	const cardList = useSelector((state) => state.cardList);

	return (
		<div className={styles.wrapper}>
			<div className={styles.contentWrapper}>
				<div className={styles.cardList}>
					{cardList.map((cardInfo, index) => (
						<Card key={index} info={cardInfo} />
					))}
				</div>
				<Button
					value={"Сохранить"}
					onClick={() => dispatch(saveProps())}
					styleType={STYLE_TYPES.confirm}
				/>
			</div>
		</div>
	);
}

const connectedApp = memo(connect(mapStateToProps)(App));
export default connectedApp;
