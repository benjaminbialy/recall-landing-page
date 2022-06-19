import React from "react";

// props: stateAnswer (button clicked/inputted), answer (correct button to click/answer), correctTerm
function TestResults(props) {
	return (
		<div
			className="testresults"
			style={{
				outline:
					props.stateAnswer == props.answer
						? "#10BC10 solid 3px"
						: "#FF0000 solid 3px",
			}}
		>
			<p className="testresults--result">
				{props.stateAnswer == props.answer ? "Correct!" : "Incorrect!"}
			</p>
			<p className="testresults--correctterm">
				The correct term is: <span>{props.correctTerm}</span>
			</p>
		</div>
	);
}

export default TestResults;
