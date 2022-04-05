import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleNameChange = e =>
    setInputValue(e.currentTarget.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      return toast.error('Please enter your query!');
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button className={s.SearchForm_button} type="submit">
          <ImSearch />
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
