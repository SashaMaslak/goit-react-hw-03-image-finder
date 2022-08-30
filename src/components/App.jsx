import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './services/fetchImages';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(query, page)
        .then(images => {
          this.setState(prev => ({
            images: page === 1 ? images : [...prev.images, ...images],
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const queryValue = e.currentTarget.elements.query.value
      .toLowerCase()
      .trim();
    if (queryValue) {
      this.setState({ query: queryValue, page: 1 });
      return;
    }
    return alert(
      'Your search Name is empty, Please enter correct search Name!'
    );
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  toggleModal = image => {
    if (image) {
      this.setState({ isModalOpen: true, modalImage: image });
      return;
    }
    this.setState({ isModalOpen: false, modalImage: '' });
  };

  render() {
    const { images, query, isLoading, isModalOpen, modalImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} toggleModal={this.toggleModal} />

        {!!images.length && !isLoading && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {images.length === 0 && query && !isLoading && (
          <h1>По запиту {query} нічого не знайдено</h1>
        )}
        {isModalOpen && (
          <Modal toggleModal={this.toggleModal} modalImage={modalImage} />
        )}
      </>
    );
  }
}
