import { useRoutes } from 'react-router-dom';
import routes from "./routes";
import styled from "styled-components";
import device from "./styles/device";
import Navbar from "./components/Navbar";
import {useContext} from "react";
import {GlobalContext} from "./store";

const StyledApp = styled.div`
    .main {
      width: 1400px;
      margin: 15rem auto;

      @media ${device.laptop} {
        width: 1024px
      }

      @media ${device.tablet} {
        width: 700px
      }

      @media ${device.mobileL} {
        width: 500px
      }

      @media ${device.mobileM} {
        width: 320px
      }
    }
`;

export default function App() {
    const { client: [clientData] } = useContext(GlobalContext);
    const routing = useRoutes(routes(clientData));

  return (
      <StyledApp>
          {clientData && <Navbar client={clientData} /> }
          <div className='main'>
              {routing}
          </div>
      </StyledApp>
  );
}
