import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Navigation = () => {
  return (
<div className={css.navBox}>
      <nav className={css.navLink}>
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClassName}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={getNavLinkClassName}>
          Favorites
        </NavLink>
      </nav>
</div>
  );
};

export default Navigation;
