(function(){
	app.TodoApp = React.createClass({
		render: function(){
			var itens = [<app.TodoItem key={1}/>, <app.TodoItem key={2}/>, <app.TodoItem key={3}/>]
			return (
				<div>
					<header className="header">
						<h1>todos</h1>
						<input className="new-todo" placeholder="What needs to be done?" autoFocus={true}></input>
					</header>
					<section className="main">
						<input className="toggle-all" type="checkbox"></input>
						<label htmlFor="toggle-all">Mark all as complete</label>
						<ul className="todo-list">
							{itens}
						</ul>
					</section>
					<app.Footer />
				</div>
			);
		}
	});

	ReactDOM.render(
		<app.TodoApp model={app.TodoModel} />,
		document.getElementsByClassName('todoapp')[0]
	);

})();

