import { ButtonLoadMore, ContainerBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ handleLoadMore }) => {
  return (
    <ContainerBtn>
      <ButtonLoadMore type="button" onClick={handleLoadMore}>
        LoadMore
      </ButtonLoadMore>
    </ContainerBtn>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
