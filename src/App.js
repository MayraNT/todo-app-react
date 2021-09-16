import React from 'react';
import TodoCard from './TodoCard';
import '../src/App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "",
      todos: [],
      isClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: ""
    })
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  deleteTodo = (index) => {
    let copyOfTodos = this.state.todos;
    copyOfTodos.splice(index, 1);

    this.setState({ todos: [...copyOfTodos] });
  }

  render() {
    return (
      <div className="App">
        <h2>todo list</h2>
        <div className="inputTodo">
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.handleClick} className="addBtn">Add Todo</button>
        </div>
        <ol>
          {this.state.todos.map((todo, index) => {
          return <TodoCard 
              key={index} 
              index={index} 
              title={todo} 
              clickToDelete={this.deleteTodo}
            />
          })}
        </ol>
      </div>
    );
  }  
}

export default App;
