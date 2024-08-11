import css from './Features.module.css';
import icons from '../../assets/icon/symbol-defs.svg';

const Features = ({ item }) => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modalWindow}>
        <div className={css.detailsFeaturesBox}>
          <div>
            <ul className={css.detailsFeaturesList}>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ fill: 'black' }}>
                  <use href={`${icons}#Users`} />
                </svg>
                <span>{item.details.hob} adults</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#Container`} />
                </svg>
                <span>Automatic</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ stroke: 'black' }}>
                  <use href={`${icons}#AC`} />
                </svg>
                <span>AC</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ fill: 'black' }}>
                  <use href={`${icons}#petrol`} />
                </svg>
                <span>Petrol</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#kitchen`} />
                </svg>
                <span>Kitchen</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#bed`} />
                </svg>
                <span>{item.details.beds} beds</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#conditioner`} />
                </svg>
                <span>{item.details.airConditioner} air conditioner</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#CD`} />
                </svg>
                <span>CD</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg
                  className={css.detailsIcons}
                  style={{ stroke: 'black', fill: '#fff' }}
                >
                  <use href={`${icons}#radio`} />
                </svg>
                <span>Radio</span>
              </li>
              <li className={css.detailsFeaturesItem}>
                <svg className={css.detailsIcons} style={{ stroke: 'black' }}>
                  <use href={`${icons}#hob`} />
                </svg>
                <span>{item.details.hob} Hob</span>
              </li>
            </ul>
            <div className={css.detailsVehicle}>
              <h3 className={css.vehicleTitle}>Vehicle details</h3>
              <hr className={css.detailsLine} />
              <ul className={css.detailsVehicleList}>
                <li className={css.detailsVehicleItem}>
                  <p>Form</p>
                  <p>{item.form}</p>
                </li>
                <li className={css.detailsVehicleItem}>
                  <p>Length</p>
                  <p>{item.length}</p>
                </li>
                <li className={css.detailsVehicleItem}>
                  <p>Width</p>
                  <p>{item.width}</p>
                </li>
                <li className={css.detailsVehicleItem}>
                  <p>Height</p>
                  <p>{item.height}</p>
                </li>
                <li className={css.detailsVehicleItem}>
                  <p>Tank</p>
                  <p>{item.tank}</p>
                </li>
                <li className={css.detailsVehicleItem}>
                  <p>Consumption</p>
                  <p>{item.consumption}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
