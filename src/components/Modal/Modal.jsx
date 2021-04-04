import React from 'react';
/*import PropTypes from 'prop-types';*/
/*import Button from '../Button/Button';*/
import './Modal.scss';
 
const Modal = ({ active, setActive, children}) => {
  return (
    <>
    <div className={active ? "modal active" : "modal"} onClick= {() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick= {e => e.stopPropagation()}>
  {children}
      </div>
    </div> 
    </>
  );
};


/*Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
}

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => { },
  onSubmit: () => { },
  children: null,

};
*/
export default Modal;