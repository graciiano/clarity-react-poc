import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { RegisterSubmitPayload } from '@interface/services/http/products-register/products-register.d';
import { submitProductRegister } from '@interface/services/http/products-register/products-register.service';

import { submitRegisterFailure, submitRegisterRequest, submitRegisterSuccess } from './duck';

type RegisterAction = PayloadAction<RegisterSubmitPayload>;

function* submitRegisterWorker(action: RegisterAction) {
  try {
    yield call(submitProductRegister, action.payload);
    yield put(submitRegisterSuccess());
  } catch (error) {
    yield put(submitRegisterFailure('Erro ao cadastrar produto.'));
  }
}

export default function* productsRegisterSaga() {
  yield takeLatest(submitRegisterRequest.type, submitRegisterWorker);
}
