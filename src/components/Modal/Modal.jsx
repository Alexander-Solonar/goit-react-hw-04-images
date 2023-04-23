import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress);
  }

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  handlePress = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { url, tag } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={url} alt={tag} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
