import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleQuerySubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return toast.warn('Please, enter your query');
    }

    onSubmit(query.trim());
    setQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleQuerySubmit}>
        <button type="submit" className={styles.button}>
          <ImSearch />
          <span className={styles.buttonLabel}>Search</span>
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
