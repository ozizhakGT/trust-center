import {useContext, useState} from "react";
import styled from "styled-components";
import device from "../styles/device";
import { useNavigate } from "react-router-dom";
import { getClient } from "../api/client";
import errorsHandler from "../handlers/errors";
import { types } from "../reducers/client";
import {GlobalContext} from "../store";
import Input from "../components/Input";
import Button from "../components/Button";
import { lightBlue, isInActiveProp } from "../styles/colors";

export const StyledLogin = styled.div`
  text-align: center;
  
  h1 { font-size: 3rem }
  h2 { font-size: 2.5rem }
  h3 { font-size: 1.8rem }
  
  .login {
      margin: 2rem auto;    
      width: 30rem;
      background-color: ${lightBlue};
      border-radius: 8px;
      padding: 2rem;

    @media ${device.mobileM} {
      width: 20rem;
    }    

      .login-form {
        margin: 2rem 0;
      }
    }
`;

export default function Login() {
    const navigate = useNavigate();
    const {client: [_, dispatch]} = useContext(GlobalContext);
    const [companyNameVal, setCompanyNameVal] = useState('');
    const [error, setError] = useState(null);

    const onChangeCompanyName = ev => {
        setCompanyNameVal(ev.target.value);
    }

    const onSubmitCompanyName = async () => {
        try {
            if (!companyNameVal) return setError('mandatory field!');

            const { data } = await getClient(companyNameVal);

            dispatch({ type: types.SET_CLIENT, payload: data[0] });

            navigate(`/${companyNameVal}`);
        } catch ({ response }) {
            debugger;
            errorsHandler(dispatch, navigate, response.status);
        }
    }

    return (
        <StyledLogin>
            <h1>Welcome to Trust Center</h1>
            <div className='login'>
                <h2>Login</h2>
                <h3>Please write your company name:</h3>
                {error && <p style={{ color: isInActiveProp }}>{error}</p>}
                <div className='login-form'>
                    <Input
                        value={companyNameVal}
                        placeholder='Fill Company Name ...'
                        allowEnterClick
                        onInput={onChangeCompanyName}
                        onClick={onSubmitCompanyName} />
                </div>
                <Button onClick={onSubmitCompanyName}>Submit</Button>
            </div>
        </StyledLogin>
    )
}