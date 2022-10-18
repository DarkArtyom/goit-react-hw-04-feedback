import { ButtonList, ButtonsItem, BtnStyle } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onFeedbackClick }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(option => {
        return (
          <ButtonsItem>
            <BtnStyle
              type="button"
              key={option}
              onClick={() => onFeedbackClick(option)}
            >
              {option}
            </BtnStyle>
          </ButtonsItem>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
