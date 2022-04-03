import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastError from './helpers/toastError';
import API from './services/api';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Spinner from './components/Loader.jsx';
import Modal from './components/Modal/Modal';
import styles from './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [alt, setAlt] = useState('');
  const [error, setError] = useState('');

  const onSearch = query => {
    setQuery(query);
    setIsLoading(true);
    setImages([]);
    setPage(1);
    setError(null);
  };

  useEffect(() => {
    if (!query) {
      setImages([]);
      return;
    }
    setIsLoading(true);

    API.fetchImages(query, page)
      .then(({ hits }) => {
        if (hits.length === 0) {
          toastError(query);
        } else {
          setImages(prevState => [...prevState, ...hits]);
          setPage(page);
        }
      })
      .catch(error => setError('Please, try again'))
      .finally(setIsLoading(false));
  }, [page, query]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
    onScroll();
  };

  const onScroll = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  const onOpenModal = e => {
    e.preventDefault();
    setOpenModal(true);
    setModalImage(e.target.dataset.largeimg);
    setAlt(e.target.alt);
  };

  const onCloseModal = () => setOpenModal(false);

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={onSearch} />
      {isLoading && <Spinner />}
      {images.length > 0 && !error && (
        <>
          <ImageGallery openModal={onOpenModal} images={images} />
          <Button handleClick={onLoadMore} />
        </>
      )}
      {openModal && <Modal onClose={onCloseModal} src={modalImage} alt={alt} />}
      {error && <p className={styles.error}>{error}</p>}
      <ToastContainer autoClose={3000} theme={'colored'} />
    </div>
  );
}
