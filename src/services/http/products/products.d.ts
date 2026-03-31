export interface Product {
  id: number;
  name: string;
  price: number;
  status: 'ativo' | 'inativo';
}

export interface GetProductsResponse {
  products: Product[];
}

export interface CreateProductPayload {
  name: string;
  price: number;
  status: 'ativo' | 'inativo';
}

export interface CreateProductResponse {
  product: Product;
}
