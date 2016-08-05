var TodoApp = React.createClass({
	render: function(){
		return (
			<h3>Está funcionando, ando, ando, ando!</h3>
		);
	}
});
ReactDOM.render(
	<TodoApp />,
	document.getElementsByClassName('todoapp')[0]
);
