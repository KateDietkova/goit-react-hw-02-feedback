import React, { Component } from 'react';
import { Buttons } from './Buttons/Buttons';

const buttons = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCountFeedback = (e) => {
    const typeFeedback = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [typeFeedback]: prevState[typeFeedback] + 1,
    }));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = (total) => {
    const { good } = this.state;
    if (total !== 0) return Math.floor((good / total) * 100);
    return 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback();
    const percentPositiveFeedback =
      this.countPositiveFeedbackPercentage(countTotal);
    return (
      <>
        <Buttons buttons={buttons} onCount={this.onCountFeedback} />

        <h2>Statistics</h2>

        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total:{countTotal}</p>
        <p>Positive Feedback: {percentPositiveFeedback} %</p>
      </>
    );
  }
}
