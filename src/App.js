import React, { useState, useEffect } from 'react';
import API from './Services/API';

import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button/Button';
import Loader from 'react-loader-spinner';
// import toast, { Toaster } from 'react-hot-toast';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Components/Loader/Loader.module.css';

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImg, setSelectedImg] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchImages = async () => {
      try {
        const api = await API.fetchImages({ searchQuery, page });
        if (api.length === 0) {
          return setError(true);
        }
        setImages(prevImages => [...prevImages, ...api]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [searchQuery, page]);

  const getImages = () => {
    setLoading(true);
    scroll();
    setPage(page => page + 1);
  };
  const scroll = () => {
    window.scrollBy({
      top: document.documentElement.clientHeight - 160,
      behavior: 'smooth',
    });
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectImage = image => {
    setSelectedImg(image);
    toggleModal();
  };

  const handleSubmit = query => {
    setImages([]);
    setSearchQuery(query);
    setPage(1);
    setError(null);
    setLoading(true);
  };

  return (
    <>
      {/* <Toaster /> */}
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && !error && (
        <ImageGallery images={images} onSelect={handleSelectImage} />
      )}

      {/* {error && toast.error('Error')} */}
      {loading && (
        <Loader
          className={css.loader}
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={1000}
        />
      )}

      {!loading && images.length >= 12 && !error && (
        <Button getImages={getImages} />
      )}
      {showModal && <Modal onClose={toggleModal} largeImageURL={selectedImg} />}
    </>
  );
}

export default App;
