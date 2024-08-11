import  { useState } from 'react';
import ModalWindow from '../Modal/ModalWindow/ModalWindow';
import css from './CatalogItem.module.css';
import icons from '../../assets/icon/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import {
  addItemLocalStorage,
  addItemLocalStorageID,
  restoreData,
  restoreDataID,
} from '../../utils/localStorage';
import { dataLocal, dataLocalID } from '../../constans/constans';
import { addIsFavorites } from '../../redux/favorites/operations';

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newStyle, setNewStyle] = useState(() => {
    const test = dataLocalID();
    const isActive = test.includes(item._id);
    return !isActive;
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const saveItem = newStyle => {
    if (newStyle) {
      let data = dataLocal();
      data.push(item);

      let dataId = dataLocalID();
      dataId.push(item._id);

      addItemLocalStorage('saved-camper', data);
      addItemLocalStorageID('keyID', dataId);
      setNewStyle(false);

      dispatch(addIsFavorites(item._id));
    } else {
      restoreData(item);
      restoreDataID(item._id);
      setNewStyle(true);
    }
  };

  return (
    <div className={css.catalogItem}>
      <img className={css.itemImg} src={item.gallery[0]} alt="" />
      <div className={css.descriptionBox}>
        <div className={css.itemTitleBox}>
          <h2 className={css.itemTitle}>{item.name}</h2>
          <p className={css.itemTitlePrice}>&#x20ac;{item.price},00</p>
        </div>
        <div className={css.itemSubTitleBox}>
          <p className={css.itemSubTitleRating}>
            <svg className={css.reviewsIcons}>
              <use href={`${icons}#star`} />
            </svg>
            {item.rating}({item.reviews.length} Reviews)
          </p>
          <p className={css.itemSubTitleLocation}>
            <svg className={css.reviewsIconsLocation}>
              <use href={`${icons}#map-pin`} />
            </svg>
            {item.location}
          </p>
        </div>
        <p className={css.descriptionText}>{item.description}</p>
        <ul className={css.descriptionList}>
          <li className={css.descriptionItem}>
            <svg className={css.descriptionIcons} style={{ fill: 'black' }}>
              <use href={`${icons}#Users`} />
            </svg>
            <span>{item.details.hob} adults</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#Container`} />
            </svg>
            <span>Automatic</span>
          </li>
          <li className={css.descriptionItem}>
            <svg className={css.descriptionIcons} style={{ fill: 'black' }}>
              <use href={`${icons}#petrol`} />
            </svg>
            <span>Petrol</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#kitchen`} />
            </svg>
            <span>Kitchen</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: 'black', fill: '#fff' }}
            >
              <use href={`${icons}#bed`} />
            </svg>
            <span>{item.details.beds} beds</span>
          </li>
          <li className={css.descriptionItem}>
            <svg
              className={css.descriptionIcons}
              style={{ stroke: '#000', fill: '#fff' }}
            >
              <use href={`${icons}#AC`} />
            </svg>
            <span>AC</span>
          </li>
        </ul>
        <button className={css.buttonShowMore} onClick={openModal}>
          Show more
        </button>
        <button
          style={{ background: 'inherit' }}
          onClick={() => saveItem(newStyle)}
        >
          <svg
            className={`${
              newStyle ? css.buttonIsFavotes : css.buttonFavotesIsActive
            }`}
          >
            <use href={`${icons}#HeartDefault`} />
          </svg>
        </button>
      </div>
      {modalIsOpen && <ModalWindow closeModal={closeModal} item={item} />}
    </div>
  );
};

export default CatalogItem;
