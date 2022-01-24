import styled, { keyframes } from "styled-components";
import {isInActiveCategory, isInActiveProp, lightBlue, isActiveProp} from "../styles/colors";
import usePropAPI from "../hooks/useAPI";
import {cardFadeIn} from "../styles/animations";

const toggleActivationColor = ({ isValid }, activeColor= isActiveProp, inActiveColor=isInActiveProp) => isValid ? activeColor : inActiveColor;

const StyledProp = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  
  p {
    &:not(last-child) {
      margin-bottom: 5px;
    }
    color: ${(props) => props.hasApi ? isInActiveCategory : toggleActivationColor(props)};
    transition: .3s;
  }
`;

const StyledCard = styled.div`
  background-color: white;
  text-align: center;
  padding: 10px;

  width: 25rem;
  height: 15rem;
  border: 1px solid ${props => toggleActivationColor(props, lightBlue, isInActiveCategory)};
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0,0,0, .4);
  transition: .3s;
  opacity: 0;
  animation: ${cardFadeIn} ${({duration}) => duration}s forwards;

  h2 {
    font-size: 1.7rem;
    text-decoration: underline;
    margin-bottom: 2rem;
  }

  .properties {
    text-align: left;
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
  }
`;


export default function Card(companyProps) {
    const { name, children, isValid, duration } = companyProps;

    return (
        <StyledCard isValid duration={duration+1}>
            <h2>{name}</h2>
            <div className='properties'>
                {(children && children.length) && children.map((prop, index) => <Prop key={prop.name+index} { ...prop } />)}
            </div>
        </StyledCard>
    )
}

function Prop(prop) {
    const { name, apiAnswer=null } = usePropAPI(prop);

    return <StyledProp isValid={prop.isValid}>
        <p>{name} {apiAnswer && `(${apiAnswer.rate})`}</p>
    </StyledProp>
}