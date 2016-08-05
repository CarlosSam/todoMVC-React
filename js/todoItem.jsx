(function(){
	app.TodoItem = React.createClass({
		render: function(){
			return (
				<li>
					<div className="view">
						<input className="toggle" type="checkbox"></input>
						<label>Buy a unicorn</label>
						<button className="destroy"></button>
					</div>
				</li>
			);
		}
	});
})();
