var app = app || {};

(function (window) {
	'use strict';

	app.ENTER_KEY = 13;
	app.ESC_KEY = 27;

	app.VIEW_MODE_ALL = "all",
	app.VIEW_MODE_COMPLETED = "completed",
	app.VIEW_MODE_ACTIVE = "active",

	app.LOCAL_STORAGE_NAMESPACE = "todos-react2",

	app.TodoModel = {
		todos: JSON.parse(localStorage.getItem(app.LOCAL_STORAGE_NAMESPACE)) || [],
		viewMode: app.VIEW_MODE_ALL, // all options: all, active, completed
		listeners: [],
		addListener: function(listenerFunction){
			this.listeners.push(listenerFunction);
		},
		informListeners: function(){
			this.listeners.forEach(function(func){
				func();
			});
		},
		storeTodos: function(){
			localStorage.setItem(app.LOCAL_STORAGE_NAMESPACE, JSON.stringify(app.TodoModel.todos));
		},
		updateViewMode: function(newViewMode){
			this.viewMode = newViewMode;
			this.informListeners();
		},
		addTodo: function(newTitle){
			this.todos.push({id: Date.now(), title: newTitle, completed: false});
			this.informListeners();
		},
		removeTodo: function(todo){
			this.todos = this.todos.filter(function(e){ 
				return e != todo;
			});
			this.informListeners();
		},
		editTodoTitle: function(id, newTitle){
			this.todos = this.todos.map(function(e){
				if (e.id != id){
					return e;
				}
				e.title = newTitle;
				return e;
			});
			this.informListeners();
		},
		editAllTodosCompleted: function(completed){
			this.todos = this.todos.map(function(e){
				e.completed = completed;
				return e;
			});
			this.informListeners();
		},
		editTodoCompleted: function(id, completed){
			this.todos = this.todos.map(function(e){
				if (e.id != id){
					return e;
				}
				e.completed = completed;
				return e;
			});
			this.informListeners();
		},
		removeAllTodosCompleted: function(){
			this.todos = this.todos.filter(function(e){
				return !e.completed;
			});
			this.informListeners();
		},
		hasAnyTodoLeft: function(){
			return this.qtdItensLeft() > 0;
		},
		hasCompletedTodos: function(){
			var idx = 0;
			while (idx < this.todos.length){
				if (this.todos[idx].completed){
					return true;
				}
				idx++;
			} 
			return false;
		},
		qtdItensLeft: function(){
			return this.todos.filter(function(e){return !e.completed}).length;
		}
	};
})(window);
