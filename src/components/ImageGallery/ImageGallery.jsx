import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

function ImageGallery({ images, openModal }) {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            src={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  ),
  openModal: PropTypes.func,
};

export default ImageGallery;
