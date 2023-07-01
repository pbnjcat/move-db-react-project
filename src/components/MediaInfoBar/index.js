import React from 'react';
import PropTypes from 'prop-types';
//helpers
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Wrapper, Content } from './MediaInfoBar.styles';

// Number info about a movie 

const MediaInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p>Running Time: {calcTime(time)}</p>
      </div>
      <div className='column'>
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className='column'>
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MediaInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
}

export default MediaInfoBar;
