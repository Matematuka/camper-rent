import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <div className={css.notFound}></div>;
};

export default NotFound;
