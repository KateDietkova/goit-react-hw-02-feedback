import PropTypes from 'prop-types';
import { StatList, StatInfo } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <StatInfo>
        <p>Good:</p>
        <p>{good}</p>
      </StatInfo>
      <StatInfo>
        <p>Neutral:</p>
        <p>{neutral}</p>
      </StatInfo>
      <StatInfo>
        <p>Bad:</p>
        <p>{bad}</p>
      </StatInfo>
      <StatInfo>
        <p>Total:</p>
        <p>{total}</p>
      </StatInfo>
      <StatInfo>
        <p>Positive feedback:</p>
        <p>{positivePercentage} %</p>
      </StatInfo>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
