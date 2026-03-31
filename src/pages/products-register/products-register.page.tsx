import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '@interface/constants/routes';
import {
    getIsSubmitting,
    getSubmitError,
    getSubmitSuccess,
    resetRegisterState,
    submitRegisterRequest,
} from '@interface/store/products-register';

import {
    Button,
    ButtonGroup,
    ErrorMessage,
    FieldGroup,
    Form,
    FormContainer,
    FormTitle,
    Input,
    Label,
    Select,
    SubmitError,
} from './styles';

interface FormValues {
  name: string;
  price: string;
  status: 'ativo' | 'inativo';
}

const ProductsRegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSubmitting = useSelector(getIsSubmitting);
  const submitError = useSelector(getSubmitError);
  const submitSuccess = useSelector(getSubmitSuccess);

  const defaultValues: FormValues = {
    name: '',
    price: '',
    status: 'ativo',
  };

  const { register, handleSubmit, errors } = useForm({ defaultValues });

  useEffect(() => {
    return () => {
      dispatch(resetRegisterState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (submitSuccess) {
      history.push(ROUTES.PRODUCTS);
    }
  }, [submitSuccess, history]);

  const onSubmit = (data: FormValues) => {
    dispatch(
      submitRegisterRequest({
        name: data.name,
        price: Number(data.price),
        status: data.status,
      })
    );
  };

  return (
    <FormContainer>
      <FormTitle>Cadastrar Produto</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            placeholder="Nome do produto"
            data-error={errors.name ? 'true' : undefined}
            ref={register({ required: 'O nome é obrigatório.' })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            placeholder="0,00"
            data-error={errors.price ? 'true' : undefined}
            ref={register({
              required: 'O preço é obrigatório.',
              validate: (value: string) => Number(value) > 0 || 'O preço deve ser maior que zero.',
            })}
          />
          {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="status">Status</Label>
          <Select id="status" name="status" ref={register}>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </Select>
        </FieldGroup>

        {submitError && <SubmitError>{submitError}</SubmitError>}

        <ButtonGroup>
          <Button type="button" data-variant="secondary" onClick={() => history.push(ROUTES.PRODUCTS)}>
            Voltar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </Button>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default ProductsRegisterPage;
