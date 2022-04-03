import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ handleClick }) => {
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  fetchImages: PropTypes.func,
};

export default Button;
