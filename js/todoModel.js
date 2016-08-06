var app = app || {};

(function (window) {
	'use strict';

	app.ENTER_KEY = 13;
	app.ESC_KEY = 27;

	app.VIEW_MODE_ALL = "all",
	app.VIEW_MODE_COMPLETED = "completed",
	app.VIEW_MODE_ACTIVE = "active",

	app.TodoModel = {
		todos: [{id: 1470446015839, title: "viajar o mundo", completed: false},
		{id: 1470446015846, title: "experimentar várias coisas", completed: true},
		{id: 1470446015898, title: "realizar muito", completed: false}],
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
