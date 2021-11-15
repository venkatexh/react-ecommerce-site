import styled from "styled-components";
import { Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 60%;
  width: 20px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
 padding: 5px 15px;
 cursor: pointer;
 font-weight: bold;
`;

export const LogoComponent = styled(Logo)`
 max-height: 50px;
`