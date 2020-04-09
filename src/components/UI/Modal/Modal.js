import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';


class Modal extends Component {

  render (){
    return (
        <div className={classes.Modal}
          style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1': '0'}}>
        </div>

  )}
}

export default Modal;
