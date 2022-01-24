import ProtoTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 15px;
  background: lightsalmon;
  transition: .3s;
  padding: 10px 15px;
  cursor: pointer;
  
  &:disabled {
    background: lightgrey;
  }
  
  &:hover {
    filter: brightness(110%);
  }
`;

export default function Button({ onClick, disabled, children }) {

    return <StyledButton onClick={onClick} disabled={disabled} >{children}</StyledButton>
}

Button.defaultProps = {
    disabled: false
}

Button.prototype = {
    onClick: ProtoTypes.function,
    disabled: ProtoTypes.boolean,
    children: ProtoTypes.any.isRequired
}