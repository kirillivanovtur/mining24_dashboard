import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyles: any = styled(Link)`
  img {
    width: 100%;
  }

  &.header__logo {
    margin-right: auto;
    max-width: 211px;
  }

  &.sidebar__logo {
    display: none;
  }
`;
