import styled from 'styled-components';

import theme from '@interface/styles/theme';

export const FormContainer = styled.div`
  padding: ${theme.spacing.xl};
  max-width: 560px;
  margin: 0 auto;
`;

export const FormTitle = styled.h1`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
`;

export const Form = styled.form`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const Label = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text};
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text};
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.15);
  }

  &[data-error='true'] {
    border-color: ${theme.colors.danger};

    &:focus {
      border-color: ${theme.colors.danger};
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
    }
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text};
  background: ${theme.colors.surface};
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:focus {
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.15);
  }

  &[data-error='true'] {
    border-color: ${theme.colors.danger};

    &:focus {
      border-color: ${theme.colors.danger};
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.danger};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px 20px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid transparent;
  transition: background 0.15s ease;
  background: ${theme.colors.primary};
  color: #fff;

  &:hover {
    background: #1544b5;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

export const SubmitError = styled.p`
  color: ${theme.colors.danger};
  font-size: ${theme.typography.fontSize.sm};
  text-align: center;
`;
