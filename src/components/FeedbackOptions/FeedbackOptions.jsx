import PropTypes from 'prop-types';
import { Button, BtnList} from "./FeedbackOptions.styled";


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnList>
            {options.map(el => (
                <li key={el}>
                    <Button onClick={() => onLeaveFeedback(el)}>{el}</Button>
                </li>
            ))}
        </BtnList>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};