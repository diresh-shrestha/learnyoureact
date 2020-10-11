import React, { Component } from 'react';

export default class TodoBox extends Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return <div className="todoList">I am a TodoList.</div>;
  }
}

class TodoForm extends Component {
  render() {
    return <div className="todoForm">I am a TodoForm.</div>;
  }
}
