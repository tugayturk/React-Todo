import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/TodoHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

    addItem = () => {
     const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için itemlere id
        id: Math.floor(Math.random()*1000),
        content: currentValue,
      };

      this.setState(
        {
          
          todos: [...this.state.todos, userInput],
        },
        () => {
            this.setState({
            userInput: "",
          });
        }
      );
    }
  };
  removeItem= (id)=>{
    let newTodos =this.state.todos.filter((todo) =>{  
      return todo.id !== id; });
   
    this.setState({todos:newTodos})
   }

   
  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList 
            todos={this.state.todos} 
            removeItem={this.removeItem}
           />           
          </div>
        )}
      </div>
    );
  }
}

export default App;
