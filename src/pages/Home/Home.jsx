import Navigation from '../../components/Navigation/Navigation';
import css from './Home.module.css';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const Home = () => {
  return (
    <div className={css.homePage}>
      <header>
        <div className={css.header}>
          <Navigation getNavLinkClassName={getNavLinkClassName} />
          <h1 className={css.title}>CAMPER RENT IN UKRANE</h1>
        </div>
      </header>
      <p className={css.text}>
        Buying a camper is an important decision. Among the many options, it is
        easy to get confused when choosing the perfect house on wheels. If you
        choose a house on wheels and look at different trailers, you can arrange
        a test drive by renting a camper. This is an ideal option in the
        conditions of such a variety of campers on the market. We offer the
        option of short-term rentals (from 2 days to several weeks) and are
        ready to offer long-term rentals from several weeks.
      </p>

      <p className={css.contacts}>
        CAMPER RENT IN UKRAINE: Kyiv tel. +38 (067) 800-5050.
      </p>
    </div>
  );
};

export default Home;
