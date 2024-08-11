import { useState } from 'react';
import css from './FiltersBox.module.css';
import FilterConditions from '../FilterConditions/FilterConditions';
import FilterType from '../FilterType/FilterType';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const LocationSchema = Yup.object().shape({
  location: Yup.string().required('Location is required'),
});

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
        <Formik
          initialValues={{ location: '' }}
          validationSchema={LocationSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                className={css.locationInput}
                name="location"
                placeholder="Enter a location"
              />
              {errors.location && touched.location ? (
                <div className={css.errorMessage}>{errors.location}</div>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <h2 className={css.filterBoxTitle}>Filters</h2>
        <FilterConditions
          hasAccepted={hasAccepted}
          handleChange={handleChange}
        />
        <FilterType camper={camper} handleSizeChange={handleSizeChange} />
      </div>
      <button className={css.buttonSearch} type="submit">
        Submit
      </button>
    </div>
  );
};

export default FiltersBox;
