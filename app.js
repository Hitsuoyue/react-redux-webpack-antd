import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/createStore';
import BasicLayout from './src/Layout/BasicLayout';

const store = configureStore();

class APP extends Component{
    render(){
        return(
            <Provider store={store}>
                <BasicLayout/>
            </Provider>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));