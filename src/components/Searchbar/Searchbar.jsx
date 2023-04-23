import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    namePictures: '',
  };

  handleNameChange = event => {
    const { value } = event.target;

    this.setState({ namePictures: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { namePictures } = this.state;
    const { onSubmit } = this.props;

    if (namePictures.trim() === '') {
      return toast.error('Enter name please!');
    }

    onSubmit(namePictures);
  };

  render() {
    const { namePictures } = this.state;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
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
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
