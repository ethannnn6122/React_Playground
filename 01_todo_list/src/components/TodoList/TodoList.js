import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import TodoListItems from './TodoListItems/TodoListItems';
import classes from './TodoList.module.css';


class todoList extends Component {

    state = {
        items: []
    }

    addItem = (e) => {
        if (this._inputElement.value !== "") {
            let newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
             
          e.preventDefault();
    }

    deleteItem = (key) => {
        const newItems = this.state.items.filter((item) =>{
            return item.key !== key;
        });

        this.setState({items: newItems});
    }

    render() {
        return(
            <Aux >
                <h1>To-Do List App</h1>
                <p>Start Adding Items to Your List and click them to delete them.</p>
                <hr/>
                <form className={classes.TodoList} onSubmit={this.addItem}>
                    <input type="text"
                        placeholder='Enter a Task'
                        ref={(a) => this._inputElement = a}>
                        </input>
                    <button type="submit">Add</button>
                </form>
                <TodoListItems entries={this.state.items} delete={this.deleteItem}/>
            </Aux>
        );
    }
}

export default todoList;