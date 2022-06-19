import React, { useState, useRef, useEffect } from "react";
import autosize from "autosize";
import TipTapEditor from "./TipTapEditor.js";

function TermCard(props) {
	const [focus, setFocus] = useState(false);

	const { setFocusedTerms, focusedTerms, focused } = props;

	const handleFocus = () => {
		let tempFocusedArray = [...focusedTerms];
		if (!focus) {
			tempFocusedArray.push(props.termObject);
			setFocusedTerms(tempFocusedArray);
		} else if (focus) {
			let indexOfTerm = tempFocusedArray.indexOf(props.number);
			tempFocusedArray.splice(indexOfTerm, 1);
			setFocusedTerms(tempFocusedArray);
		}
		setFocus(!focus);
	};

	useEffect(() => {
		if (focused === true) {
			setFocus(true);
		}
	}, []);

	return (
		<div
			className="termcard"
			style={{
				width: props.result && "calc(90% - 30px)",
			}}
		>
			{props.result != true && (
				<div className="termcard--heading">
					<p className="termcard--heading--number">{props.number}</p>
					{!focused && (
						<button
							style={{
								backgroundColor: focus ? "var(--primary)" : "var(--accent)",
								color: focus ? "#fff" : "var(--background)",
							}}
							className="termcard--heading--focus"
							onClick={handleFocus}
						>
							{focus ? "focusing" : "focus"}
						</button>
					)}
				</div>
			)}
			<div className="termcard--inputs">
				<TipTapEditor page={"term"} content={props.term} />
				<div className="termcard--inputs--division"></div>
				<TipTapEditor page={"def"} content={props.desc} />
			</div>
		</div>
	);
}

export default TermCard;
