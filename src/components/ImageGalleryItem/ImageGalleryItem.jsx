import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModal: !prevState.isModal,
    }));
  };

  render() {
    const { largeImageURL, tags, webformatURL } = this.props.item;
    const { isModal } = this.state;

    return (
      <li className={css['gallery-item']}>
        <img onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {isModal && (
          <Modal
            url={largeImageURL}
            tag={tags}
            closeModal={this.toggleModal}
          ></Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
