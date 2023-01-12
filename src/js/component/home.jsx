import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState ("")
	const [todos, setTodos] = useState ([]);
	return (
		<div className="container">
			<div className = "header">todos</div>
			<div className = "todo-list">
				<ul>
					<li><input 
					type = "text" 
					onChange = {(e) => setInputValue(e.target.value)} 
					value = {inputValue}
					onKeyPress = {(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([inputValue]));
							setInputValue("");
						}
					}} 
					placeholder = "What do you have to do?"></input>
					</li>
					{todos.map((item, index) => (
						<li>
						{item} <button className = "btn"
						onClick = {() => 
							setTodos(
								todos.filter((t, currentIndex) => 
									index != currentIndex
									)
								)
							}>X</button>
						</li>
					))}
				</ul>
				<div className = "task-number"> {todos.length} tasks</div>
			</div>
		</div>
	);
};

export default Home;
