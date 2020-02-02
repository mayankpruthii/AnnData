import React, { Component } from 'react';
import axios from 'axios';
import './Nutrients.css';
import NavBar from '../NavBar/NavBar';
import Aux from '../../hoc/hoc';

class Nutrients extends Component {
    state = {
        calcium: '',
        moisture: '',
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        dataRecieved: false
    }

    componentDidMount() {
        console.log('Component did mount!')
        this.getNutrients();
    }

    getNutrients = () => {
        axios.get('https://kisan-app.herokuapp.com/stats')
        .then(response => {
            // console.log(response.data)
            this.setState({calcium: response.data['Calcium']})
            this.setState({moisture: response.data['Moisture']})
            this.setState({nitrogen: response.data['Nitrogen']})
            this.setState({phosphorus: response.data['Phosphorus']})
            this.setState({potassium: response.data['potassium']})   
            this.setState({dataRecieved: true})
        })
    }

    render() {
        return(
        
            this.state.dataRecieved ? (
                <Aux>
                <NavBar />
                   <div>
                    <div className={'MyNutrients'}>My Nutrients
                    <table className={'Table'} align='center'>
                        <tr>
                            <th>Nutrient</th>
                            <th>Percentage in soil</th>
                        </tr>
                        <tr>
                            <td>Calcium</td>
                            <td>{this.state.calcium}</td>
                        </tr>
                        <tr>
                            <td>Moisture</td>
                            <td>{this.state.moisture}</td>
                        </tr>
                        <tr>
                            <td>Nitrogen</td>
                            <td>{this.state.nitrogen}</td>
                        </tr>
                        <tr>
                            <td>Phosphorus</td>
                            <td>{this.state.phosphorus}</td>
                        </tr>
                        <tr>
                            <td>Potassium</td>
                            <td>{this.state.potassium}</td>
                        </tr>
                    </table>  
                    
                    </div>
                    {/* <div className={'Paragraph'}>
                        Calcium is present in adequate amounts in most soils. Calcium is a component of several primary and secondary minerals in the soil, which are essentially insoluble for agricultural considerations. These materials are the original sources of the soluble or available forms of Ca. Calcium is also present in relatively soluble forms, as a cation (positively charged Ca++) adsorbed to the soil colloidal complex. The ionic form is considered to be available to crops.
                        </div> */}
                        </div>
                    </Aux>

                ):<div>Loading...!</div>
                
        )
    }
}

export default Nutrients;