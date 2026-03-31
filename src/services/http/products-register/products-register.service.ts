import { RegisterSubmitPayload, RegisterSubmitResponse } from './products-register.d';

export function submitProductRegister(payload: RegisterSubmitPayload): Promise<RegisterSubmitResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}
