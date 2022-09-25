import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';
const FeedbackWidget = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        className={s.button}
        key={option}
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    );
  });
};
FeedbackWidget.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackWidget;
