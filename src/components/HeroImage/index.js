import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, title, text, mediaId, onClick }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <Link to={`/${mediaId}`} onClick={onClick}>
          <Button text={'Watch \u23F5'} />
        </Link>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  mediaId: PropTypes.number,
};

export default HeroImage;
