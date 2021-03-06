import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/hoc';
import Backdrop from '../../../UI/BackDrop/BackDrop';


class Modal extends React.Component {
   
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[Modal] will update')
    }

    render() {
        return(
        <Aux>
            <Backdrop show={this.props.show} 
                    Clicked={this.props.modalClosed}/>
            <div className={'Modal'}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>
        )
    }
}

export default Modal;