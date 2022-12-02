import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box p="10px">
      <Title>{title}</Title>
      {children}
    </Box>
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

