import React from 'react';
import {
    FlatList, Text, View
  } from 'react-native';



const todoListItems = (props) => {

    const deleteItem = (key) => {
        props.delete(key);
    }


    // const createTasks = (item) => {
    //     return <li  
    //             key={item.key}
    //             onClick={() => deleteItem(item.key)}
    //             >{item.text}</li>
    //   }

    // let listItems = props.entries.map(createTasks);

    return(
        <View>
            <FlatList
                data={props.entries}
                renderItem={({item, key}) => 
                <View>
                    <View>
                        <Text onPress={() => deleteItem(key)}>
                            {item.text}
                        </Text>
                    </View>
                </View>}
            />
        </View>
    );
}

export default todoListItems;