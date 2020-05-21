import { createSlice } from '@reduxjs/toolkit';
import http from 'common/http';

const initialState = {
  products: [],
  product: null,
  loading: false,
  sending: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, { payload }) {
      state.loading = false;
      state.products = payload;
      state.error = null;
    },
    fetchProductsFailure(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    fetchProductRequest(state) {
      state.loading = true;
    },
    fetchProductSuccess(state, { payload }) {
      state.loading = false;
      state.product = payload;
      state.error = null;
    },
    fetchProductFailure(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    addProductRequest(state) {
      state.sending = true;
    },
    addProductSuccess(state, { payload }) {
      state.sending = false;
      state.product = payload;
      state.error = null;
    },
    addProductFailure(state, { payload }) {
      state.sending = false;
      state.error = payload;
    },
    updateProductRequest(state) {
      state.sending = true;
    },
    updateProductSuccess(state, { payload }) {
      state.sending = false;
      state.product = payload;
      state.error = null;
    },
    updateProductFailure(state, { payload }) {
      state.sending = false;
      state.error = payload;
    }
  }
});

export default productsSlice.reducer;

export const productsSelector = state => state.products;

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure
} = productsSlice.actions;

export const fetchProducts = search => async dispatch => {
  dispatch(fetchProductsRequest());

  try {
    const response = await http.get(`products`);
    dispatch(fetchProductsSuccess(response.data.products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.response.data));
  }
};

export const fetchProduct = productId => async (dispatch, getState) => {
  const { product } = getState().products;
  if (product?.id === productId) return;

  dispatch(fetchProductRequest());

  try {
    const response = await http.get(`products/${productId}`);
    dispatch(fetchProductSuccess(response.data.product));
  } catch (error) {
    dispatch(fetchProductFailure(error.response.data));
  }
};

export const addProduct = fields => dispatch => {
  return new Promise(async (resolve, reject) => {
    dispatch(addProductRequest());

    try {
      const response = await http.post(`products`, fields);
      dispatch(addProductSuccess(response.data.product));
      resolve();
    } catch (error) {
      const { status, data } = error.response;
      status === 422 ? reject(data.errors) : dispatch(addProductFailure(data));
    }
  });
};

export const updateProduct = fields => (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    const { product } = getState().products;

    dispatch(updateProductRequest());

    try {
      const response = await http.put(`products/${product.id}`, fields);
      dispatch(updateProductSuccess(response.data.product));
      resolve();
    } catch (error) {
      const { status, data } = error.response;
      status === 422
        ? reject(data.errors)
        : dispatch(updateProductFailure(data));
    }
  });
};
