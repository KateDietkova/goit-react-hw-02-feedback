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

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Buttons buttons={buttons} onCount={this.onCountFeedback} />

        <h2>Statistics</h2>

        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </>
    );
  }
}
