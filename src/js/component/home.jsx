import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState ("")
	const [todos, setTodos] = useState ([]);
		useEffect(() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/sheepdogg").then((response) => response.json()).then((responseData) => setTodos(responseData)).catch((err) => console.log(err))
		},[])
		useEffect(() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/sheepdogg", {
				method: "PUT",
				body: JSON.stringify(todos),
				headers: {
				  "Content-Type": "application/json"
				}
			}).then((response) => response.json()).then((responseData) => console.log(responseData)).catch((err) => console.log(err))
		},[todos])
	return (
		<div className="container">
			<div className = "header">todos</div>
			<div className = "todo-list">
				<ul>
					<li><input 
					type = "text" 
					onChange = {(e) => setInputValue(e.target.value)} 
					value = {inputValue}
					onKeyDown = {(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat([{label:inputValue, done: false}]));
							setInputValue("");
						}
					}} 
					placeholder = "What do you have to do?"></input>
					</li>
					{todos.map((item, index) => (
						<li>
						{item.label} <button className = "btn"
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
