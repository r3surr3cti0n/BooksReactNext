import React, { useState } from "react";
import styles from "./Feedback.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Feedback = ({ message }) => {
	const [close, setClose] = useState(false);
	

	// Hide panel after 5 seconds
	setTimeout(() => {
		setClose(true);
	}, 5000);

	return (
		<div
			className={
				close
					? `${styles.feedback} ${styles.closedFeedback}`
					: styles.feedback
			}
		>
			<div className={styles.feedbackMessage}>
				<h3>{message}</h3>
			</div>
			<FontAwesomeIcon
				onClick={() => setClose(true)}
				className={styles.closeIcon}
				icon={faClose}
			/>
		</div>
	);
};

export default Feedback;
