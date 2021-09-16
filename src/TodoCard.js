import React from 'react';
import './todoCard.css';

function TodoCard(props) {
  const {title, clickToDelete, index} = props;

  return (
    <div className="listItem">
      <li>{title}</li>
      <button onClick={() => {clickToDelete(index)}} className="deleteBtn">X</button>
    </div>
  )
}

export default TodoCard;