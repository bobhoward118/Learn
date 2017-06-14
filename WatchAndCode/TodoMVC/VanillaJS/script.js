var todos = ['item 1', 'item 2', 'item 3'];

console.log('My Todos:', todos);

todos.push('item 4', 'item 5');

todos[0] = 'item 1 updated';

todos.splice(0, 1);



function addTodo(todo) {
	todos.push(todo);
}

