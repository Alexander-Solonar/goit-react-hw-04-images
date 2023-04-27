import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [namePictures, setNamePictures] = useState('');

  const handleNameChange = ({ target }) => {
    setNamePictures(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!namePictures.trim()) {
      return toast.error('Enter name please!');
    }
    onSubmit(namePictures);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button} aria-label="Search">
          <span className={css['button-label']}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={namePictures}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
