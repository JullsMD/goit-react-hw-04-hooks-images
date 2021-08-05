import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ getImages }) => {
  return (
    <button className={styles.Button} type="button" onClick={getImages}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  getImages: PropTypes.func.isRequired,
};
