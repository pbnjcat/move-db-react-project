import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Styles
import { Image } from './thumb.styles';

// thumbnails for movie

const Thumb = ({ image, mediaId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${mediaId}`}>
                <Image src={image} alt='movie-thumb' />
            </Link>
        ) 
        : ( 
            <Image src={image} alt='media-thumb' /> 
        )}

    </div>
)

Thumb.propTypes = {
    image: PropTypes.string,
    mediaId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default Thumb;