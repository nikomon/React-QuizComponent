import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
      }
      showNextQuestion(){
        this.setState(state => {
            return { quiz_position: state.quiz_position + 1 
            }
        });
    }
    render(){
        const isQuizEnd = quizData.quiz_questions.length === this.state.quiz_position - 1;
        return <div>
                    { !isQuizEnd && <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>  }
                    { isQuizEnd && <QuizEnd /> } 
                </div>
    }
}

export default Quiz;