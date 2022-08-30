import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <GalleryList>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            largeImageURL={image.largeImageURL}
            webformatURL={image.webformatURL}
            tags={image.tags}
            toggleModal={toggleModal}
          />
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
