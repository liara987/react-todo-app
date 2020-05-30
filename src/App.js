import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Study React js"},
      {id: 2, content: "Buy a chair"},
      {id: 3, content: "Buy a new mouse"}
    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    // crete a new variable, copy all content of state do the new var and add the new todo
    let todos = [...this.state.todos, todo];
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
