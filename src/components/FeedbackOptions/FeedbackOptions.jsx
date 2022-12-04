import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(value => (
        <li key={value}>
          <FeedbackButton type="button" onClick={onLeaveFeedback}>
            {value}
          </FeedbackButton>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};