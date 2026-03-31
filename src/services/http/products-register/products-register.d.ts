export interface RegisterSubmitPayload {
  name: string;
  price: number;
  status: 'ativo' | 'inativo';
}

export interface RegisterSubmitResponse {
  success: boolean;
}
