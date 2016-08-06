(function(){
	app.Footer = React.createClass({
		render: function(){
			var todoCountTxt =	<span className="todo-count">
									<strong>{this.props.qtdTodosLeft}</strong> {this.props.qtdTodosLeft == 1? "item": "itens"} left
								</span>;
			var clearCompletedBtn = <button onClick={this.props.handleClearCompleted} className="clear-completed" style={{display: (this.props.hasCompletedTodos ? "block" : "none")}}>Clear completed</button>
			return (
				<footer className="footer">
					{todoCountTxt}
					<ul className="filters">
						<li>
							<a className="selected" href="#/">All</a>
						</li>
						<li>
							<a href="#/active">Active</a>
						</li>
						<li>
							<a href="#/completed">Completed</a>
						</li>
					</ul>
					{clearCompletedBtn}
				</footer>
			);
		}
	});
})();
