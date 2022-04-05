import PropTypes from 'prop-types';
import s from './ItemGalleryItem.module.css';

export default function ItemGalleryItem({ src, alt, dataSrc, onClick }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem_image}
        src={src}
        alt={alt}
        data-src={dataSrc}
        onClick={onClick}
      />
    </li>
  );
}

ItemGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
