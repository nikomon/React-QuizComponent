import React, { Component } from 'react';

class QuizQuestionButton extends Component{
    handleClick(){
        this.props.clickHandler(this.props.button_text)
    }
    render(){
        return <li>
            <button className="btn btn-default" onClick={this.handleClick.bind(this)} value={this.props.button_text}>{this.props.button_text}</button>
            </li>
    }
}

export default QuizQuestionButton;