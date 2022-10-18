import { GeneralText, WrapperText } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <WrapperText>
      <div>
        <GeneralText>Good: {good}</GeneralText>
        <GeneralText>Neutral: {neutral}</GeneralText>
        <GeneralText>Bad: {bad}</GeneralText>
        <GeneralText>Total: {total}</GeneralText>
        <GeneralText>Positive feedback: {positivePercentage}%</GeneralText>
      </div>
    </WrapperText>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
