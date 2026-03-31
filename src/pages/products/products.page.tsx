import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '@interface/constants/routes';
import { fetchProductsRequest, getError, getIsLoading, getProducts } from '@interface/store/products';

import {
  Badge,
  Button,
  ErrorText,
  LoadingContainer,
  PageContainer,
  PageHeader,
  PageTitle,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Produtos</PageTitle>
        <Button data-variant="primary" onClick={() => history.push(ROUTES.PRODUCTS_REGISTER)}>
          + Novo Produto
        </Button>
      </PageHeader>

      {isLoading && <LoadingContainer>Carregando produtos...</LoadingContainer>}

      {error && <ErrorText>{error}</ErrorText>}

      {!isLoading && !error && (
        <Table>
          <Thead>
            <tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Preço</Th>
              <Th>Status</Th>
            </tr>
          </Thead>
          <Tbody>
            {products.map(product => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td>{formatCurrency(product.price)}</Td>
                <Td>
                  <Badge data-variant={product.status}>{product.status === 'ativo' ? 'Ativo' : 'Inativo'}</Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </PageContainer>
  );
};

export default ProductsPage;
