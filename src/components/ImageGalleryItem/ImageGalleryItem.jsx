import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item: { webformatURL, tags, largeImageURL } }) => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(prevState => !prevState);
  };

  return (
    <li className={css['gallery-item']}>
      <img onClick={toggleModal} src={webformatURL} alt={tags} />
      {isModal && (
        <Modal url={largeImageURL} tag={tags} closeModal={toggleModal}></Modal>
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
