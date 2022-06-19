import React, { useState, useEffect } from "react";

import DescriptionEditor from "./DescriptionEditor.js";

function Flashcard(props) {
	const { handleFlip, stateTerm, setTerm } = props;

	useEffect(() => {
		setTerm(true);
	}, []);

	return (
		<div
			className="flashcard"
			onClick={handleFlip}
			style={{
				height: props.page === "flashcards" && "100%",
				width: props.page === "flashcards" && "60%",
			}}
		>
			{stateTerm ? (
				props.term
			) : (
				// show description
				<DescriptionEditor content={props.desc} />
			)}
		</div>
	);
}

export default Flashcard;
