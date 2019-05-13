import React, {Component} from 'react';


export default class TodoItem extends Component{
  createTasks = item =>{
    return(
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
    
  }

  render(){

    const todoEntries = this.props.entries
    const listItem = todoEntries.map(this.createTasks)

    return(
      <ul className="theList">{listItem}</ul>
    )
  }
}