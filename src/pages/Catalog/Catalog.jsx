import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/selectors';
import { pagination } from '../../utils/pagination';

import FiltersBox from '../../components/FiltersBox/FiltersBox';
import CatalogList from '../../components/CatalogList/CatalogList';
import { fetchCampers } from '../../redux/campers/operations';

import css from './Catalog.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const сampersAll = useSelector(selectAllCampers);
  const campers = pagination(useSelector(selectAllCampers));
  const [isAllArr, setIsAllArr] = useState(false);
  //   const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  //   useEffect(() => {
  //     const data = paginationNewArr(campers, index);
  //     setNewArr(prevState => [...prevState, ...data]);
  //   }, [index]);

  const upDataArr = isActiv => {
    if (isActiv) {
      setIsAllArr(true);
    }
    // if (index < campers.length - 1) setIndex(index + 1);
  };

  return (
    <section className={css.catalog}>
      <FiltersBox />
      {isAllArr ? (
        <CatalogList
          newArr={сampersAll}
          upDataArr={upDataArr}
          isActivBtn={false}
        />
      ) : (
        <CatalogList newArr={campers[0]} upDataArr={upDataArr} />
      )}
    </section>
  );
};

export default CatalogPage;
