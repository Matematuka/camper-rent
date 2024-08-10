import CatalogList from '../../components/CatalogList/CatalogList';
import FiltersBox from '../../components/FiltersBox/FiltersBox';
import css from './Catalog.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div className={css.catalog}>
      <FiltersBox />
      <CatalogList />
    </div>
  );
};

export default Catalog;
