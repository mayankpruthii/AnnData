import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../HomePage/Modal/Modal';
import './Predictions.css';
import Aux from '../../hoc/hoc'
import NavBar from '../NavBar/NavBar';

var config = {
    headers: {'Content-Type': 'application/json' }
}

class Predictions extends Component {
    state = {
        startingMonth: '',
        cultivationTime: '',
        minTemp: '',
        maxTemp: '',
        rainfallRequired: '',
        dataPosted: false,
        answer: ''
    }

    postDataHandler = () => {
        
        axios.get('https://kisan-app.herokuapp.com/what2grow/'+this.state.startingMonth+'a'+this.state.cultivationTime+'a'+this.state.minTemp+'a'+this.state.maxTemp+'a'+this.state.rainfallRequired,config)
            .then(response => {
                // console.log(response.data);
                this.setState({dataPosted: true, answer: response.data})
                console.log(this.state.answer)
            });
    }
     
    // getDataHandler = () => {
        
    //         axios.get('https://jsonplaceholder.typicode.com/posts')
    //             .then(response => {
    //                 console.log(response.data[0])
    //             }).catch(err => {
    //                 console.log(err)
    //             })      
        
    // }

    dataPostedScreenCancelHandler = () => {
        this.setState({dataPosted:false})
    }

    render () {
        return (
           
               <Aux> 
                  <NavBar />  
                <div className={'WelcomeTag'}>
                    <p className={'Welcome'}>Welcome to Crop Prediction!</p>
                <div className="EnterTheValues">
                    <label className={'Label'}>Starting Month</label><br />
                    <input className={'Input'} type="text" value={this.state.startingMonth} onChange={(event) => this.setState({startingMonth: event.target.value})} /><br />
                    <label className={'Label'}>Cultivation Time</label><br />
                    <input className={'Input'} type="text" value={this.state.cultivationTime} onChange={(event) => this.setState({cultivationTime: event.target.value})} /><br />
                    <label className={'Label'}>Minimum Temperature</label><br />
                    <input className={'Input'} type="text" value={this.state.minTemp} onChange={(event) => this.setState({minTemp: event.target.value})} /><br />
                    <label className={'Label'}>Maximum Temperature</label><br />
                    <input className={'Input'} type="text" value={this.state.maxTemp} onChange={(event) => this.setState({maxTemp: event.target.value})} /><br />
                    <label className={'Label'}>Rainfall Required</label><br />
                    <input className={'Input'} type="text" value={this.state.rainfallRequired} onChange={(event) => this.setState({rainfallRequired: event.target.value})} /><br />
                    
                    <button className={'Button'} onClick={this.postDataHandler}>Predict</button>
                    <Modal show={this.state.dataPosted}
                        modalClosed={this.dataPostedScreenCancelHandler}>
                        <div className='Answer'>Best Suited Crop is: <b>{this.state.answer}</b></div>
                    </Modal>
                </div>
                
                  
                </div>
                </Aux>
            ); 
                
        }

    }

export default Predictions;