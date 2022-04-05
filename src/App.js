import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import imagesApi from './services/ImagesApi';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from './components/Modal';
import toastWarm from './helpers/toastWarn';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import s from './components/Loader/Loading.module.css';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [imageGallery, setImageGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (!inputValue) {
      setImageGallery([]);
    }

    if (!inputValue) {
      return;
    }

    setStatus('pending');

    imagesApi
      .fetchImages(inputValue, page)
      .then(({ hits }) => {
        const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        });
        if (images.length > 0) {
          setImageGallery(prevState => [...prevState, ...images]);
          setStatus('resolved');
        } else {
          toastWarm(inputValue);
          setStatus('idle');
        }
      })
      .catch(error => {
        setError(error);
        setStatus('pending');
      });
  }, [page, inputValue]);

  const hundleFormSubmit = inputQuere => {
    if (inputQuere !== inputValue) {
      setInputValue(inputQuere);
      setPage(1);
      setImageGallery([]);
      setStatus('pending');
    }
  };

  const handleClickButton = () => {
    setPage(prevPage => prevPage + 1);
    setStatus('pending');
  };

  const handleClickImg = e => {
    const imgForModal = e.target.dataset.src;
    const altForModal = e.target.alt;
    setShowModal(true);
    setModalImg(imgForModal);
    setModalAlt(altForModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      {status === 'idle' && <Searchbar onSubmit={hundleFormSubmit} />}
      {status === 'pending' && (
        <>
          <Searchbar onSubmit={hundleFormSubmit} />
          <ImageGallery images={imageGallery} />
          {imageGallery.length > 0 && <ImageGallery images={imageGallery} />}
          <Loader
            className={s.loader}
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
          />
        </>
      )}

      {status === 'resolved' && (
        <>
          {showModal && (
            <Modal onClose={toggleModal}>
              <img src={modalImg} alt={modalAlt} />
            </Modal>
          )}
          <Searchbar onSubmit={hundleFormSubmit} />
          <ImageGallery onClick={handleClickImg} images={imageGallery} />
          <Button onClick={handleClickButton} />
        </>
      )}

      {status === 'rejected' && <h2>{error.message}</h2>}
      <ToastContainer theme={'colored'} />
    </Container>
  );
}
