import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item}></ImageGalleryItem>
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
