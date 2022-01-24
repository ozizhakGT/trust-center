import styled from "styled-components";
import ProtoTypes from "prop-types";

const StyledInput = styled.input`
  border-radius: 25px;
  border: none;
  padding: .5rem;
  
  
  &:focus {
    outline: none;
    border: 1px 
  }
  
`;

export default function Input({ onClick, onChange, defaultVal, allowEnterClick, value, ...rest }) {

    const click = ev => {
        if(allowEnterClick && ev.which === 13) {
            onClick && onClick(ev);
        }
    }

    return <StyledInput
        { ...rest }
        value={value}
        onKeyUp={click}
    />
}

Input.defaultProps = {
    type: 'text',
    defaultVal: '',
    allowEnterClick: false
}

Input.prototype = {
    type: ProtoTypes.string,
    onClick: ProtoTypes.function,
    defaultVal: ProtoTypes.any,
    allowEnterClick: ProtoTypes.boolean
}