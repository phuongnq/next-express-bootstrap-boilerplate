import PropTypes from 'prop-types';
import BootstrapStyle from '!!raw-loader!../styles/vendor/bootstrap.min.css';

const Theme = ({ children }) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: BootstrapStyle }} />
    {children}
  </div>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
};

export default Theme;
