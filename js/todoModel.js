var app = app || {};

(function (window) {
	'use strict';

	app.TodoModel = {
		todos: [{id: 1470434730675, title: "tenho a oportunidade de programar muito", completed: false},
			{id: 1470434745072, title: "I get to do many amazing things!", completed: true},
			{id: 1470434829093, title: "web business", completed: false}],
		viewMode: "all",
		addTodo: function(newTitle){
			this.todos.push({id: Date.now(), title: newTitle, completed: false});
		},
		removeTodo: function(id){
			this.todos = this.todos.filter(function(e){ 
				return e.id != id;
			});
		},
		editTodoTitle: function(id, newTitle){
			this.todos = this.todos.map(function(e){
				if (e.id != id){
					return e;
				}
				e.title = newTitle;
				return e;
			});
		},
		editAllTodosCompleted: function(completed){
			this.todos = this.todos.map(function(e){
				e.completed = completed;
				return e;
			});
		},
		editTodoCompleted: function(id, completed){
			this.todos = this.todos.map(function(e){
				if (e.id != id){
					return e;
				}
				e.completed = completed;
				return e;
			});
		},
		removeAllTodosCompleted: function(){
			this.todos = this.todos.filter(function(e){
				return !e.completed;
			});
		}
	};
})(window);
