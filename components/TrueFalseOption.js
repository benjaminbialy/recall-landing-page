import React from "react";

function TrueFalseOption({ answer, value, id, name, onChangeValue }) {
	return (
		<input
			className="truefalse--answer--label--radio"
			type="radio"
			value={value}
			id={id}
			name={name}
			checked={answer === value}
			required
			onChange={onChangeValue}
		/>
	);
}

export default TrueFalseOption;
