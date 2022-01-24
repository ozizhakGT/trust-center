import styled from "styled-components";
import {useContext} from "react";
import {GlobalContext} from "../store";
import {types} from "../reducers/client";

const StyledNavbar = styled.div`
    height: 8rem;
    width: 100vw;
    background-color: lightblue;
    position: fixed;
    top: 0;
    box-shadow: 0 10px 15px rgba(0,0,0,.2);
  
    .navbar-wrapper {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5rem;
      font-size: 2.5rem;
      
      & > p:last-child {
        cursor: pointer;
        font-size: 1.5rem;
        
        &:hover {
          transform: translateY(-3px);
        }
      }
    }
`

export default function Navbar() {
    const { client: [companyData, dispatch] } = useContext(GlobalContext);

    const logout = () => dispatch({ type: types.LOGOUT_CLIENT });

    return (
        <StyledNavbar>
            <div className='navbar-wrapper'>
                <div>
                    <p>{companyData.companyName}</p>
                </div>
                <p onClick={logout}>Logout</p>
            </div>
        </StyledNavbar>
    )
}