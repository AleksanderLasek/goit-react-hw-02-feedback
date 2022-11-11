import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={styles.number}>Good: {good}</p>
    <p className={styles.number}>Neutral: {neutral}</p>
    <p className={styles.number}>Bad: {bad}</p>
    <p className={styles.number}>Total: {total}</p>
    <p className={styles.number}>Positive feedback: {positivePercentage}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
