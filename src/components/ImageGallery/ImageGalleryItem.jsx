import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

function ImageGalleryItem({ tags, src, largeImageURL, openModal }) {
  return (
    <li className={styles.galleryItem} onClick={openModal}>
      <img
        src={src}
        alt={tags}
        data-largeimg={largeImageURL}
        className={styles.image}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
