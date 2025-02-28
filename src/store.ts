import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

import commonReducer, { commonInitialState } from './slices/common-slice';
import offerConfigReducer, { offersInitialState } from './slices/offers-slice';
import checkoutReducer, { checkoutInitialState } from './slices/checkout-slice';
import modalReducer, { modalInitialState } from './slices/modal-slice';

const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
        common: commonReducer,
        modal: modalReducer,
        offers: offerConfigReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, null, AnyAction>;

export const RootInitialState: RootState = {
    checkout: checkoutInitialState,
    common: commonInitialState,
    modal: modalInitialState,
    offers: offersInitialState,
};

export default store;
