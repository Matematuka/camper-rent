import { useState } from 'react';
import css from './FiltersBox.module.css';
import FilterConditions from '../FilterConditions/FilterConditions';
import FilterType from '../FilterType/FilterType';

const FiltersBox = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [camper, setCamper] = useState('');

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  const handleSizeChange = evt => {
    setCamper(evt.target.value);
  };
  return (
    <div className={css.filterContainer}>
      <div className={css.locationBox}>
        <h2 className={css.locationTitle}>Location</h2>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div>
        <h2 className={css.filterBoxTitle}>Filters</h2>
        <FilterConditions
          hasAccepted={hasAccepted}
          handleChange={handleChange}
        />
        <FilterType camper={camper} handleSizeChange={handleSizeChange} />
      </div>
    </div>
  );
};

export default FiltersBox;
