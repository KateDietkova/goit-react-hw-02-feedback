import PropTypes from 'prop-types';
import { FeedbackList, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(({ key, value }) => (
        <li key={key}>
          <FeedbackButton type="button" onClick={onLeaveFeedback}>
            {value}
          </FeedbackButton>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};