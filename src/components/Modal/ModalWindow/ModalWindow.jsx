import { useState } from 'react';
import clsx from 'clsx';
import ModalForm from '../ModalForm/ModalForm';
import icons from '../../../assets/icon/symbol-defs.svg';
import css from './ModalWindow.module.css';
import Features from '../../Features/Features';
import Reviews from '../../Revievs/Reviews';

const ModalWindow = ({ closeModal, item }) => {
  const [tab, setTab] = useState('features');

  return (
    <div className={css.modalOverlay} onClick={closeModal}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={closeModal}>
          <svg width="32" height="32">
            <use
              xlinkHref={`${icons}#close`}
              style={{ stroke: '#000', fill: 'none' }}
            ></use>
          </svg>
        </button>
        <h2 className={css.camperName}>{item.name}</h2>
        <div className={css.ratingWrapper}>
          <p className={css.camperRating}>
            <svg className={css.ratingStar} width="20" height="20">
              <use xlinkHref={`${icons}#star`}></use>
            </svg>
            {item.rating} ({item.reviews.length} Reviews)
          </p>
          <p className={css.camperLocation}>
            <svg className={css.locationIcon} width="14" height="16">
              <use xlinkHref={`${icons}#map-pin`}></use>
            </svg>
            {item.location}
          </p>
        </div>
        <p className={css.camperPrice}>€{item.price.toFixed(2)}</p>
        <ul className={css.camperGallery}>
          {Array.isArray(item.gallery) &&
            item.gallery.map(image => (
              <li key={image}>
                <img
                  className={css.camperImage}
                  src={image}
                  alt="camper detailed image"
                  width={290}
                  height={310}
                />
              </li>
            ))}
        </ul>
        <p className={css.camperDescription}>{item.description}</p>
        <div className={css.tabsWrapper}>
          <button
            className={clsx(css.tab, tab === 'features' && css.active)}
            type="button"
            onClick={() => setTab('features')}
          >
            Features
          </button>
          <button
            className={clsx(css.tab, tab === 'reviews' && css.active)}
            type="button"
            onClick={() => setTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.detailedInfo}>
          {tab === 'features' ? (
            <Features item={item} />
          ) : (
            <Reviews item={item} />
          )}
          <ModalForm />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
