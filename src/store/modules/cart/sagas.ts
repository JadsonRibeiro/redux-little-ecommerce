import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios';

import api from '../../../services/api';

import { IState } from '../..';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSucess } from './actions';
import { ActionTypes } from './types';

interface IStock {
    id: number;
    quantity: number
}

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>

function* checkProductStock({ payload }: checkProductStockRequest) {
    const { product } = payload;

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    });

    const stockQuantityResponse: AxiosResponse<IStock> = yield call(api.get, `stock/${product.id}`);

    if(stockQuantityResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSucess(product));
    } else {
        yield put(addProductToCartFailure(product.id));
    }
}

export default all([
    takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
]);