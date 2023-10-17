// function Phone(props) {
//     return <h3> This is a {props.brand} phone! </h3>
// }
import React from 'react';
import ReactDOM from 'react-dom/client';

class Phone extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            brand: "Samsung",
            model: "Samsung Galaxy S22",
            color: "Black",
            year: 2022,
            image: 'https://store.ee.co.uk/images/product/uni2/DigitalContent/600x450/gp/GPBX_DD51C418-D13C-4B58-975D-12060B80AE79_large.jpg'
        };
    }

    changeColor=() => {
        this.setState({color: "White"});
    }

    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <h2>{this.state.model}</h2>
                <h3>Colour: {this.state.color} || Year: {this.state.year}</h3>
                <img src={this.state.image}/>
                <button type="button" onClick={this.changeColor}>Change color</button>
                
            </div>
        )
    }

}

export default Phone;