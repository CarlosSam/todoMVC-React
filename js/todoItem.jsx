(function(){
	app.TodoItem = React.createClass({
		render: function(){
			return (
				<li data-id={this.props.id} className={this.props.completed ? "completed" : ""}>
					<div className="view">
						<input className="toggle" type="checkbox" defaultChecked={this.props.completed}></input>
						<label>{this.props.title}</label>
						<button className="destroy" onClick={this.props.destroyTodo}></button>
					</div>
				</li>
			);
		}
	});
})();
