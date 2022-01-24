import styled from "styled-components";
import {Link} from "react-router-dom";
import notFoundPic from '../assets/images/404.png';

const StyledNotFound = styled.div`
  text-align: center;
  
  .link {
    line-height: 5rem;
    font-size: 1.8rem;
  }
`;

export default function NotFound() {

    return (
        <StyledNotFound>
            <img width='250' height='180' src={notFoundPic} alt="404"/>
            <div>
                <Link className='link' to='/login'>
                    return to login page
                </Link>
            </div>
        </StyledNotFound>
    )
}