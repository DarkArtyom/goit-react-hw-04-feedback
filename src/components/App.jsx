// import { Feedback } from './Feedback/Feedback';
import { useState } from 'react';
import { Wraper } from './Feedback/Feedback.styled';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Feedback/SectionTitle/SectionTitle';
import { Notification } from './Feedback/Notification';
import { Statistics } from './Feedback/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const handleButtonClick = keys => {
    switch (keys) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Wraper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onFeedbackClick={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wraper>
  );
};
