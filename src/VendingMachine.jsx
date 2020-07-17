import React from 'react';
import {Route} from 'react-router-dom';
import Apple from './Apple'
import Soda from './Soda'
import Chips from './Chips'
import VmLinks from './VmLinks'

const VendingMachine = () => {
    return (
        <div>
            <h1>Vending Maching</h1>
            <Route exact path='/'>
                <VmLinks/>
            </Route>
            <Route exact path='/apple'>
                <Apple/>
            </Route>
            <Route exact path='/Soda'>
                <Soda/>
            </Route>
            <Route exact path='/Chips'>
                <Chips/>
            </Route>
        </div>
    );
}

export default VendingMachine;
