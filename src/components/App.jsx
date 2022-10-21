// import { Feedback } from './Feedback/Feedback';
import { Component } from 'react';
import { Wraper } from './Feedback/Feedback.styled';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/SectionTitle/SectionTitle';
import { Notification } from './Feedback/Notification';
import { Statistics } from './Feedback/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = keys => {
    this.setState(prevState => ({
      [keys]: (prevState[keys] += 1),
    }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Wraper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onFeedbackClick={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wraper>
    );
  }
}
