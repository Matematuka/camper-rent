import { CatalogItem } from '../CatalogItem/CatalogItem';
import css from './CatalogList.module.css';

const CatalogList = ({ newArr, upDataArr, isActivBtn = true }) => {
  return (
    <div className={css.campersListBox}>
      <ul className={css.campersList}>
        {Array.isArray(newArr) &&
          newArr.map(camper => (
            <li key={camper._id}>
              <CatalogItem item={camper} />
            </li>
          ))}
      </ul>
      {isActivBtn && (
        <button
          className={css.buttonLoadMore}
          type="submit"
          onClick={() => {
            upDataArr(true);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogList;
