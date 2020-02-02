import React, { Component } from 'react';
import Modal from '../components/HomePage/Modal/Modal';
import Home from '../components/HomePage/Home';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import Aux from '../hoc/hoc';
// import Predictions from '../components/Predictions/Predictions';
// import Predictions from '../components/Predictions/Predictions';

class AnnaData extends Component {
    state = {
        login: false
    }

    loginScreenCancelHandler = () => {
        this.setState({login:false})
    }

    loginScreenHandler = () => {
        this.setState({login:true})
    }

    render(){

        return(
            <Aux>
                <Modal show={this.state.login}
                    modalClosed={this.loginScreenCancelHandler}>
                    <LoginScreen />
                </Modal>
                <Home Clicked={this.loginScreenHandler} />
                
            </Aux>
        )
    }   
}

export default AnnaData;