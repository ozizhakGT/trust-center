import styled from "styled-components";
import useClient from "../hooks/useClient";
import { useParams } from "react-router-dom";
import {useContext} from "react";
import {GlobalContext} from "../store";
import Card from "../components/Card";


const StyledDashboard = styled.div`
  .properties-wrapper {
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }
`;

export default function Dashboard() {
    const { client: [companyData] } = useContext(GlobalContext);
    const { company } = useParams();
    useClient(company);

    return (
        <StyledDashboard>
            {(companyData && companyData.properties.length) &&
            <div className='properties-wrapper'>
                {companyData.properties.map((companyProps, index) => <Card key={companyProps.name+index} duration={index} {...companyProps} />)}
            </div>}
        </StyledDashboard>
    )
}