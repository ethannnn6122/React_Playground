import React from 'react';
import classes from './TodoListItems.module.css';


const todoListItems = (props) => {

    const deleteItem = (key) => {
        props.delete(key);
    }


    const createTasks = (item) => {
        return <li 
                className={classes.ListItems} 
                key={item.key}
                onClick={() => deleteItem(item.key)}
                >{item.text}</li>
      }

    let listItems = props.entries.map(createTasks);

    return(
        <ul>
            {listItems}
        </ul>
    );
}

export default todoListItems;