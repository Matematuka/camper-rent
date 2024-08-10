import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = ({ getNavLinkClassName }) => {
  return (
    <nav className={css.nav}>
      <NavLink className={getNavLinkClassName} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
