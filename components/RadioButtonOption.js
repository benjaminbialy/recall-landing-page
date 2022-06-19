import React from "react";

function RadioButtonOption({ id, value, name, answer, onChangeValue }) {
	return (
		<input
			className="multiplechoice--answer--label--radio"
			type="radio"
			value={value}
			id={id}
			name={name}
			checked={answer === value}
			onChange={onChangeValue}
			required
		/>
	);
}

export default RadioButtonOption;
