import React from 'react';

const Button = props => {
  return (
    <button type="button" onClick={props.onClick} className="Button">
      Load More
    </button>
  );
};

export default Button;
