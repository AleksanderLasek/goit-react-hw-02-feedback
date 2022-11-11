import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleGood = () => {
    this.setState(state => ({
      ...state,
      good: state.good + 1,
    }));
    this.countTotalFeedback();
  };

  handleNeutral = () => {
    this.setState(state => ({
      ...state,
      neutral: state.neutral + 1,
    }));
    this.countTotalFeedback();
  };

  handleBad = () => {
    this.setState(state => ({
      ...state,
      bad: state.bad + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(state => ({
      ...state,
      total: state.total + 1,
    }));
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      ...state,
      positivePercentage: Math.round((state.good / state.total) * 100),
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.handleGood}>Good</button>
          <button onClick={this.handleNeutral}>Nautral</button>
          <button onClick={this.handleBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positivePercentage}%</p>
        </div>
      </div>
    );
  }
}

export default App;
