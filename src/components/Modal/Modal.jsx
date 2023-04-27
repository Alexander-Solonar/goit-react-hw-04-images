import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ closeModal, url, tag }) => {
  useEffect(() => {
    window.addEventListener('keydown', handlePress);

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  });

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handlePress = ({ key }) => {
    if (key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <img src={url} alt={tag} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
