import React from "react";

export const ToDoList = (props) => {
	return (
		<div className="retrn">
			<i
				className="material-icons"
				onClick={() => {
					props.onSelect(props.id);
				}}
			>
				delete
			</i>
			<i
				className="material-icons"
				id="edt"
				onClick={() => props.onEdit(props.id)}
			>
				edit
			</i>
			<p>{props.arg}</p>
		</div>
	);
};
