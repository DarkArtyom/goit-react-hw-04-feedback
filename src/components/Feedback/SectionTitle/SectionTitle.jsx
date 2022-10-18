import { Wraper, Title } from '../Feedback.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Wraper>
      <Title>{title}</Title>
      {children}
    </Wraper>
  );
};
Section.propTypes = {
  title: PropTypes.string,
};
