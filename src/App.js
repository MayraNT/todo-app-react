import React from 'react';

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
    // this.state.isClicked ? 
    //   this.setState({ isClicked : true }) :
    //     this.setState({ isClicked : false })

    // this.setState({
    //   isClicked: !this.state.isClicked,
    // })    
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ todos: [...this.state.todos, this.state.text] })
    this.setState({ text: "" })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <button type="submit">Add Todo</button>
        </form>
        <ol>{this.state.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}</ol>
      </div>
    );
  }  
}

export default App;
