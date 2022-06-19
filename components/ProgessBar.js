import React from "react";

// width, margin, height, completed, total
function ProgessBar(props) {
	return (
		<div
			className="progressbar"
			style={{ width: props.width, margin: props.margin, height: props.height }}
		>
			<span
				className="progressbar--progress"
				style={{
					width: ((props.completed + 1) / props.total) * 100 + "%",
					height: props.height,
				}}
			></span>
		</div>
	);
}

export default ProgessBar;
