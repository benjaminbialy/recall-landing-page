import React, { useState } from "react";
import DescriptionEditor from "./DescriptionEditor.js";

// props: description, answer, showAnswer
function WriteTermBox(props) {
	const [answer, setAnswer] = useState("");
	const [wrong, setWrong] = useState(false);
	const [reattempt, setReattempt] = useState("");
	const [override, setOverride] = useState(false);

	const {
		setRemaining,
		remaining,
		setCorrect,
		correct,
		setIncorrect,
		incorrect,
	} = props;

	const inputValidation = (e) => {
		e.preventDefault();
		let trimmedAnswer = answer.trim();
		if (trimmedAnswer !== "") {
			setAnswer(trimmedAnswer);
			// if the answer they give is right, add it to the "correct" array and remove it from the "remaining" array.
			if (answer === props.answer) {
				// updates "correct" array
				setCorrect((prev) => [
					...prev,
					{ term: props.answer, definition: props.description },
				]);

				let tempRemaining = [...remaining];
				// removes current question from remaining array
				tempRemaining.splice(0, 1);
				setRemaining([...tempRemaining]);
				setAnswer("");
			} else {
				// if incorrect, show prompt
				setWrong(true);
			}
		}
	};

	const copyAnswer = (e) => {
		setReattempt(e.target.value);
		let reattemptTrim = reattempt.trim();
		// once copied properly, add it to the "incorrect" map and remove it from the "remaining" map
		if (reattemptTrim === props.answer) {
			setIncorrect((prev) => [
				...prev,
				{ term: props.answer, definition: props.description },
			]);

			let tempRemaining = [...remaining];
			// removes current question from remaining array
			tempRemaining.splice(0, 1);
			setRemaining([...tempRemaining]);
			setAnswer("");
			setWrong((prev) => !prev);
			setReattempt("");
			setAnswer("");
		}
	};

	const handleOverride = (e) => {
		console.log("ovveride");
		e.preventDefault();

		setCorrect((prev) => [
			...prev,
			{ term: props.answer, definition: props.description },
		]);

		let tempRemaining = [...remaining];
		// removes current question from remaining array
		tempRemaining.splice(0, 1);
		setRemaining([...tempRemaining]);
		setAnswer("");
		setOverride(false);
		setWrong(false);
	};

	if (!wrong) {
		return (
			<div className="writetermbox">
				<div className="writetermbox--header">
					<div className="writetermbox--header--headings">
						<p className="writetermbox--header--headings--type">
							Write the correct term
						</p>
					</div>
					<div className="writetermbox--header--content">
						<DescriptionEditor content={props.description} />
					</div>
				</div>
				<div className="writetermbox--answer">
					<input
						className="writetermbox--answer--input"
						required
						type="text"
						value={answer}
						placeholder="Write the correct term here!"
						onChange={(e) => setAnswer(e.target.value)}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								inputValidation(e);
								// setAnswer(e.target.value.trim());
							}
						}}
					></input>
					<button
						className="writetermbox--answer--next"
						onClick={inputValidation}
					>
						Next
					</button>
				</div>
			</div>
		);
	} else if (wrong) {
		return (
			<div className="writetermbox">
				<div className="writetermbox--header">
					<div className="writetermbox--header--headings">
						<p className="writetermbox--header--headings--type">
							Sorry! You got this term wrong.
						</p>
					</div>
					<div className="writetermbox--header--content">
						<DescriptionEditor content={props.description} />
					</div>
					<div className="writetermbox--header--feedback">
						<div>
							You said: <span style={{ color: "var(--accent)" }}>{answer}</span>
						</div>
						<div>
							The correct answer is{" "}
							<span style={{ color: "var(--accent)" }}>{props.answer}</span>
						</div>
						<div
							style={{
								color: "var(--accent)",
								width: "calc(100% - 20px)",
								textAlign: "end",
								cursor: "pointer",
							}}
							onClick={handleOverride}
						>
							Override
						</div>
					</div>
				</div>

				<div className="writetermbox--answer">
					<input
						style={{ width: "100%", margin: "40px 20px" }}
						className="writetermbox--answer--input"
						required
						type="text"
						value={reattempt}
						placeholder="Write the correct term here!"
						onChange={copyAnswer}
						onKeyUp={copyAnswer}
					></input>
				</div>
			</div>
		);
	}
}
export default WriteTermBox;
