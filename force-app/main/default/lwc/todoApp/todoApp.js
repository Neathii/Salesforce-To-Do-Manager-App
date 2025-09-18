import { LightningElement, track } from 'lwc';

export default class TodoApp extends LightningElement {
    @track todoName = '';
    @track todos = [];

    handleInputChange(event) {
        this.todoName = event.target.value;
    }

    addTodo() {
        if (this.todoName.trim()) {
            this.todos = [
                ...this.todos,
                {
                    id: Date.now().toString(),
                    name: this.todoName
                }
            ];
            this.todoName = '';
        }
    }

    deleteTodo(event) {
        const todoId = event.target.dataset.id;
        this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
}
