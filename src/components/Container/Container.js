import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div>{children}</div>;
}
Container.protoTypes = {
  children: PropTypes.string,
};
