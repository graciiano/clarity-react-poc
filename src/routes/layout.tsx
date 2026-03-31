import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '@interface/constants/routes';
import theme from '@interface/styles/theme';

const TopBar = styled.header`
  height: 64px;
  background: ${theme.colors.surface};
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};
`;

const Logo = styled.span`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  cursor: pointer;
  margin-right: ${theme.spacing.xxl};
`;

const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.lg};
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.muted};
  padding: ${theme.spacing.sm} 0;
  border-bottom: 2px solid transparent;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    color: ${theme.colors.primary};
  }

  &[data-active='true'] {
    color: ${theme.colors.primary};
    border-bottom-color: ${theme.colors.primary};
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 64px);
`;

const Layout: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <TopBar>
        <Logo onClick={() => history.push(ROUTES.HOME)}>Teste Clarity</Logo>
        <Nav>
          <NavItem
            data-active={location.pathname === ROUTES.HOME ? 'true' : undefined}
            onClick={() => history.push(ROUTES.HOME)}
          >
            Home
          </NavItem>
          <NavItem
            data-active={location.pathname.startsWith(ROUTES.PRODUCTS) ? 'true' : undefined}
            onClick={() => history.push(ROUTES.PRODUCTS)}
          >
            Produtos
          </NavItem>
        </Nav>
      </TopBar>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
