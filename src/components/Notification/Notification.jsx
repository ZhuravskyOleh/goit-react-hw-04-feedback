import PropTypes from 'prop-types';
import { AiFillBulb } from "react-icons/ai";
import { Notify } from './Notification.styled';

export const Notification = ({ message }) => {
    return (
        <Notify><AiFillBulb fill='#f1f507'/> { message}</Notify>
    )
}

Notification.propTypes = {
  message: PropTypes.string,
};