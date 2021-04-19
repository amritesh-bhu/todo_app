import "./App.css";
import { useState } from "react";
import { ToDoList } from "./Component/ToDoList";

function App() {
	const [inputItem, setInputItem] = useState("");
	const [arrayList, setArrayList] = useState([]);

	const listenInput = (event) => {
		const listen = event.target.value;
		setInputItem(listen);
	};

	const update = () => {
		setArrayList([...arrayList, inputItem]);
		setInputItem("");
	};

	const deleteItems = (itemId) => {
		setArrayList(arrayList.filter((item, index) => index !== itemId));
	};

	const editItem = (itemId) => {
		const filteredItem = arrayList.filter((item, index) => index !== itemId);
		const selectedItem = arrayList.filter((item, index) => itemId === index);
		setArrayList(filteredItem);
		setInputItem(selectedItem);
	};

	return (
		<div className="maindiv">
			<div className="div2">
				<h1>ToDo List</h1>
				<input
					type="text"
					onChange={listenInput}
					placeholder="Add a item"
					value={inputItem}
				/>
				<button type="submit" onClick={update}>
					+
				</button>
				<br />
				<br />
				<div className="child">
					{arrayList.map((text, index) => {
						return (
							<ToDoList
								arg={text}
								onSelect={deleteItems}
								onEdit={editItem}
								id={index}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
