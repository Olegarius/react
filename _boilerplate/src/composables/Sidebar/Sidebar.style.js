import styled from 'styled-components';
import { NavLink } from 'shards-react';

export const MainNavbar = styled.div`
  margin-left: 21px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarItem = styled.div`
  font-family: SegoeUI;
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.32;
  letter-spacing: normal;
  text-align: left;
  color: #4d4f5c;
`;

export const ItemTitle = styled.span`
  font-size: 20px;
  color: #0078d7;
`;

export const Link = styled(NavLink)`
  padding: 5px 25px !important;
`;

export const Arrow = styled.div`
  cursor: pointer;
  padding: 20px;
`;

export const ArrowBack = styled(Arrow)`
  position: fixed;
  left: -10px;
  z-index: 100;
`;

export default styled.div`
  min-width: 300px;
`;
