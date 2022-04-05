import React from 'react';
import PropTypes from 'prop-types';
import ItemGalleryItem from '../ImageGalleryItem';
import s from './ItemGallery.module.css';

export default function ItemGallery({ images, onClick }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ItemGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
              dataSrc={largeImageURL}
              onClick={onClick}
            />
          );
        })}
      </ul>
    </>
  );
}

ItemGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};
