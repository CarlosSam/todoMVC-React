var ENTER_KEY = 13;

(function(){
	app.TodoApp = React.createClass({
		handleInputKeyPress: function(e){
			if (e.keyCode == ENTER_KEY){
				app.TodoModel.addTodo(e.currentTarget.value);
				e.currentTarget.value = "";
			}
		},
		clearCompleted: function(){
			app.TodoModel.removeAllTodosCompleted();
		},
		removeTodo: function(todo){
			app.TodoModel.removeTodo(todo);
		},
		render: function(){
			var todoApp = this;
			var itens = app.TodoModel.todos.map(function(todo){
				return <app.TodoItem destroyTodo={this.removeTodo.bind(this, todo)} key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />;
			}, this); 
			var section = 	<section className="main">
								<input className="toggle-all" type="checkbox"></input>
								<label htmlFor="toggle-all">Mark all as complete</label>
								<ul className="todo-list">
									{itens}
								</ul>
							</section>;
			var footer = <app.Footer handleClearCompleted={this.clearCompleted} qtdTodosLeft={app.TodoModel.qtdItensLeft()} hasCompletedTodos={app.TodoModel.hasCompletedTodos()} />;
			return (
				<div>
					<header className="header">
						<h1>todos</h1>
						<input className="new-todo" onKeyUp={this.handleInputKeyPress} placeholder="What needs to be done?" autoFocus={true}></input>
					</header>
					{app.TodoModel.todos.length > 0 ? section : null}
					{app.TodoModel.todos.length > 0 ? footer : null}
				</div>
			);
		}
	});

	var render = function(){
		ReactDOM.render(
			<app.TodoApp model={app.TodoModel} />,
			document.getElementsByClassName('todoapp')[0]
		);
	};

	render();

	app.TodoModel.addListener(render);

})();
