import { Wrap, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <Wrap>
            <Title>{title}</Title>
            {children}
        </Wrap>
    )
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};