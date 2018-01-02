import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import {
    actionCreate
} from "../redux/reducer";

class BasicLayout extends Component{
    constructor(props){
        super(props);
    }

    handleClick = (e,record) => {
        const {dispatch, actionCreate} = this.props;
        dispatch(actionCreate('CLICK_BUTTON', '111'));
    };

    render(){
        console.log('this.props', this.props);
        return(
            <Button onClick={this.handleClick}>124566</Button>
        )
    }
}
function mapStateToProps(state) {
    return {
        store: state // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch,
        actionCreate: actionCreate
    } // here we'll soon be mapping actions to props
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicLayout);