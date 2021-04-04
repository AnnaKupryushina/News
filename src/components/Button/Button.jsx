import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, onClick, className }) => {
     return ( 
         <button onClick={onClick} className={className} type="button">
           {children}
           </button>
     )
};
         

Button.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    clssName: PropTypes.string,
  }
  
  Button.defaultProps = {
    children: 'Кнопка',
    className: '',
  };
  
  export default Button;