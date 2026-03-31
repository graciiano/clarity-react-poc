import React from 'react';

import { useHistory } from 'react-router-dom';

import { ROUTES } from '@interface/constants/routes';

import {
  Card,
  CardDescription,
  CardIcon,
  CardsGrid,
  CardTitle,
  HomeContainer,
  HomeSubtitle,
  HomeTitle,
} from './styles';

const HomePage: React.FC = () => {
  const history = useHistory();

  return (
    <HomeContainer>
      <HomeTitle>Teste Clarity</HomeTitle>
      <HomeSubtitle>Selecione um módulo para começar</HomeSubtitle>
      <CardsGrid>
        <Card onClick={() => history.push(ROUTES.PRODUCTS)}>
          <CardIcon>📦</CardIcon>
          <CardTitle>Produtos</CardTitle>
          <CardDescription>Visualize a lista completa de produtos cadastrados com status e preços.</CardDescription>
        </Card>
        <Card onClick={() => history.push(ROUTES.PRODUCTS_REGISTER)}>
          <CardIcon>📝</CardIcon>
          <CardTitle>Cadastrar Produto</CardTitle>
          <CardDescription>Cadastre um novo produto informando nome, preço e status.</CardDescription>
        </Card>
      </CardsGrid>
    </HomeContainer>
  );
};

export default HomePage;
