import React from 'react';

function TodoCard(props) {
  const {title, clickToDelete, index} = props;

  return (
    <li>
      {title}
      <button onClick={() => {clickToDelete(index)}}>Delete</button>
    </li>
  )
}

export default TodoCard;