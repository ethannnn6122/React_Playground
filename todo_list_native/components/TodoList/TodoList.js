import React, { Component } from 'react';
import TodoListItems from './TodoListItems/TodoListItems';
import {
    Text,
    TextInput,
    Button,
    View,
    Alert
  } from 'react-native';



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
    
            this.refs._inputElement.value = "";
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
            <View>
                <Text>TODO LIST</Text>
                <TextInput
                    placeholder="Enter a Task"
                    ref={(a) => this._inputElement = a}></TextInput>
                    <Button title="ADD" onPress={() => this.addItem()}>ADD</Button>
                    <TodoListItems entries={this.state.items} delete={this.deleteItem}/>
            </View>
            
        //     <View>
        //         <Text>To-Do List App</Text>
        //         <Text>Start Adding Items to Your List and click them to delete them.</Text>
        //         <TextInput
        //             placeholder='Enter a Task'
        //             textInputRef={(a) => this._inputElement = a}>
        //         </TextInput>
        //         <Button onPress={this.addItem}>Add</Button>
        //         <TodoListItems entries={this.state.items} delete={this.deleteItem}/>
        //     </View>
        );
    }
}

export default todoList;