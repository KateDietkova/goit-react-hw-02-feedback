export const Buttons = ({buttons, onCount}) => {
    return (
      <div>
        <p>Please leave feedback</p>
        {buttons.map(feedbackType => (
          <button key={feedbackType} type="button" onClick={onCount}>
            {feedbackType}
          </button>
        ))}
      </div>
    );
}