import { useState } from 'react';
import css from './CatalogList.module.css';
import CatalogItem from '../CatalogItem/CatalogItem';
import { useSelector } from 'react-redux';
import { pagination } from '../../utils/pagination';
import { selectAllCampers } from '../../redux/campers/selectors';

const CatalogList = () => {
  const [index, setIndex] = useState(0);
  const campers = pagination(useSelector(selectAllCampers));
  return (
    <div>
      <ul className={css.camperList}>
        {Array.isArray(campers) &&
          campers[index].map(camper => (
            <li key={camper._id}>
              <CatalogItem item={camper} />
            </li>
          ))}
      </ul>
      <button
        type="submit"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default CatalogList;
