export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(feedbackType => (
        <button key={feedbackType} type="button" onClick={onLeaveFeedback}>
          {feedbackType}
        </button>
      ))}
    </div>
  );
};