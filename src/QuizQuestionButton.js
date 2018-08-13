import React, { Component } from 'react';

class QuizQuestionButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <li>
            <button className="btn btn-default" value={this.props.button_text}>{this.props.button_text}</button>
            </li>
    }
}

export default QuizQuestionButton;