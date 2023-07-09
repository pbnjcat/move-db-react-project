import React from 'react';
import PropTypes from 'prop-types';
import { calcTime, convertMoney } from '../../helpers';
import { Wrapper, Content } from './MediaInfoBar.styles';

const MediaInfoBar = ({ time, budget, revenue }) => {
  const displayTime = isNaN(time) ? 'Not available' : calcTime(time);
  const displayBudget = isNaN(budget) ? 'Not available' : convertMoney(budget);
  const displayRevenue = isNaN(revenue) ? 'Not available' : convertMoney(revenue);

  return (
    <Wrapper>
      <Content>
        <div className='column'>
          <p>Running Time: {displayTime}</p>
        </div>
        <div className='column'>
          <p>Budget: {displayBudget}</p>
        </div>
        <div className='column'>
          <p>Revenue: {displayRevenue}</p>
        </div>
      </Content>
    </Wrapper>
  );
};

MediaInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MediaInfoBar;
