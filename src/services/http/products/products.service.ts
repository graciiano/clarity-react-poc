import { CreateProductPayload, CreateProductResponse, GetProductsResponse } from './products.d';

const mockProducts = [
  { id: 1, name: 'Notebook Dell Inspiron', price: 4599.9, status: 'ativo' as const },
  { id: 2, name: 'Mouse Logitech MX Master', price: 549.0, status: 'ativo' as const },
  { id: 3, name: 'Teclado Mecânico Redragon', price: 289.9, status: 'inativo' as const },
  { id: 4, name: 'Monitor LG UltraWide 29"', price: 1899.0, status: 'ativo' as const },
  { id: 5, name: 'Headset HyperX Cloud II', price: 399.9, status: 'inativo' as const },
  { id: 6, name: 'Webcam Logitech C920', price: 479.0, status: 'ativo' as const },
];

export function getProducts(): Promise<GetProductsResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ products: mockProducts });
    }, 600);
  });
}

export function createProduct(payload: CreateProductPayload): Promise<CreateProductResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      const newProduct = {
        id: mockProducts.length + 1,
        ...payload,
      };
      resolve({ product: newProduct });
    }, 500);
  });
}
