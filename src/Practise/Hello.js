import './Hello.css';
import React from 'react';

class Hello extends React.Component{
    render(){
        return(
            <div className='f1 tc'>
                <h1>Ravi The Joker</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}
export default Hello;