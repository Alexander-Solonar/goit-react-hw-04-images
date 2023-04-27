import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Audio } from 'react-loader-spinner';
import * as API from './service/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';

import css from './App.module.css';

export const App = () => {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [namePictures, setNamePictures] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      if (!namePictures) return;

      try {
        setIsLoading(true);
        const response = await API.fetchPictures(namePictures, page);
        setCollection(prevState => [...prevState, ...response.hits]);
        setIsLoading(false);
        setIsButton(true);

        if (!response.totalHits) {
          return toast.error(`No images found for ${namePictures} query`);
        }
        if (page >= response.totalHits / 12) {
          return setIsButton(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error.message);
      }
    })();
  }, [namePictures, page]);

  const handleStateChange = query => {
    if (query === namePictures) return;

    setNamePictures(query);
    setPage(1);
    setCollection([]);
    setIsButton(false);
  };

  const handlePageChange = () => {
    setPage(prevState => prevState + 1);
    setIsButton(false);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleStateChange}></Searchbar>
      <ImageGallery items={collection}></ImageGallery>
      {isLoading && <Audio wrapperClass={css.loader}></Audio>}
      {collection.length > 0 && isButton && (
        <Button onClick={handlePageChange}></Button>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};
