import styled from 'styled-components';

import theme from '@interface/styles/theme';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 64px);
  padding: ${theme.spacing.xl};
`;

export const HomeTitle = styled.h1`
  font-size: ${theme.typography.fontSize.xxl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

export const HomeSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.muted};
  margin-bottom: ${theme.spacing.xxl};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
  max-width: 700px;
  width: 100%;
`;

export const Card = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

export const CardIcon = styled.span`
  font-size: 36px;
  display: block;
  margin-bottom: ${theme.spacing.md};
`;

export const CardTitle = styled.h2`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.muted};
  line-height: 1.5;
`;
