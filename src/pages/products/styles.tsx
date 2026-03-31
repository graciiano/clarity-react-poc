import styled from 'styled-components';

import theme from '@interface/styles/theme';

export const PageContainer = styled.div`
  padding: ${theme.spacing.xl};
  max-width: 960px;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.lg};
`;

export const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${theme.shadows.sm};
`;

export const Thead = styled.thead`
  background: #f3f4f6;
`;

export const Th = styled.th`
  text-align: left;
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f9fafb;
  }
`;

export const Td = styled.td`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text};
  border-top: 1px solid #e5e7eb;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  background: #e5e7eb;
  color: ${theme.colors.muted};

  &[data-variant='ativo'] {
    background: #d1fae5;
    color: ${theme.colors.success};
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: 10px 20px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid transparent;
  transition:
    background 0.15s ease,
    box-shadow 0.15s ease;
  background: ${theme.colors.primary};
  color: #fff;

  &:hover {
    background: #1544b5;
  }

  &[data-variant='secondary'] {
    background: ${theme.colors.surface};
    color: ${theme.colors.text};
    border-color: #d1d5db;

    &:hover {
      background: #f3f4f6;
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xxl};
  color: ${theme.colors.muted};
  font-size: ${theme.typography.fontSize.md};
`;

export const ErrorText = styled.p`
  color: ${theme.colors.danger};
  font-size: ${theme.typography.fontSize.sm};
  padding: ${theme.spacing.md};
`;
