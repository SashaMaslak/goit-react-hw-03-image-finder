import { GalleryItem, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  toggleModal,
}) => {
  return (
    <GalleryItem>
      <Img
        src={webformatURL}
        alt={tags}
        data-sourse={largeImageURL}
        onClick={() => toggleModal(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
