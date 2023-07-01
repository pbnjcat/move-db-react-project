import React from 'react';
import PropTypes from 'prop-types';
//Components
import Thumb from '../Thumb';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg';
//styles
import { Wrapper, Content, Text } from './MediaInfo.styles';

// Grabs general information about a media

const MediaInfo = ({ media }) => (
  <Wrapper backdrop={media.backdrop_path}>
    <Content>
      <Thumb
        image={
          media.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`
            : NoImage
        }
        clickable={false}
        alt='media-thumb'
      />
      <Text>
        <h1>{media.title}</h1>
        <h3>PLOT</h3>
        <p>{media.overview}</p>

        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>
              {Math.round(media.vote_average * 10) / 10}
            </div>
          </div>
          <div className='director'>
            <h3>DIRECTOR{media.directors.length > 1 ? 'S' : ''}</h3>
            {media.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
        <div className='genre'>
          <div>
            <h3>Genre</h3>
            <div className='genre-type'>
              {media.genres.map((genre, i) => (
                <span key={i}>{genre.name}  </span>
              ))}
            </div>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MediaInfo.propTypes = {
  media: PropTypes.object,
}

export default MediaInfo;
