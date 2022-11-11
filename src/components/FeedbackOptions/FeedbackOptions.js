import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <div className={styles.btn_list}>
      {options.map((option, index) => (
        <button
          className={styles.btn}
          type="button"
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
