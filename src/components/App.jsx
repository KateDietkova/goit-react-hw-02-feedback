import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import options from 'data/options.json';
import { Box } from './Box/Box';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCountFeedback = e => {
    const typeFeedback = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [typeFeedback]: prevState[typeFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    if (total !== 0) return Math.floor((good / total) * 100);
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback();
    const percentPositiveFeedback =
      this.countPositiveFeedbackPercentage(countTotal);
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onCountFeedback}
          />
        </Section>
        {countTotal !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal}
              positivePercentage={percentPositiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Box>
    );
  }
}
