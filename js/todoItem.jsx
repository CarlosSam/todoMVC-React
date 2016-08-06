(function(){
	app.TodoItem = React.createClass({
		prepareEditInput: function(evt){
			var newInput = document.createElement('input');
			newInput.value = evt.currentTarget.textContent;
			newInput.className = "edit";
			newInput.onkeyup = this.handleKeyUp;
			newInput.onblur = this.handleOnBlur;
			var liElement = evt.currentTarget.parentElement.parentElement;
			liElement.appendChild(newInput);
			liElement.className = liElement.className + " editing";
			newInput.focus();
		},
		handleKeyUp: function(evt){
			if (evt.keyCode == app.ESC_KEY){
				evt.currentTarget.value = evt.currentTarget.parentElement.childNodes[0].childNodes[1].textContent;
				evt.currentTarget.blur();
			}
			if (evt.keyCode == app.ENTER_KEY){
				evt.currentTarget.blur();
			}
		},
		handleOnBlur: function(evt){
			this.processEditInput(evt);
			this.leaveEditMode();
		},
		processEditInput: function(evt){
			var newTitle = evt.currentTarget.value.trim();
			if (newTitle.length > 0){
				app.TodoModel.editTodoTitle(this.props.id, newTitle);
			}
		},
		leaveEditMode: function(){
			var editingElement = document.getElementsByClassName("editing")[0];
			editingElement.className = editingElement.className.replace(" editing", "");
			document.getElementsByClassName("edit")[0].remove();
		},
		render: function(){
			return (
				<li data-id={this.props.id} className={this.props.completed ? "completed" : ""}>
					<div className="view">
						<input onClick={app.TodoModel.editTodoCompleted.bind(app.TodoModel, this.props.id, !this.props.completed)} className="toggle" type="checkbox" defaultChecked={this.props.completed}></input>
						<label onDoubleClick={this.prepareEditInput}>{this.props.title}</label>
						<button className="destroy" onClick={this.props.destroyTodo}></button>
					</div>
				</li>
			);
		}
	});
})();
