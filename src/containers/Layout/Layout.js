import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Header from '../../components/Header/Header';

class Layout extends Component {
    render(){
        return (
            <Aux>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Layout;