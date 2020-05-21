import { createSlice } from '@reduxjs/toolkit';
import http from 'common/http';

const initialState = {
  session: null,
  authenticated: null,
  loading: false,
  sending: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.sending = true;
    },
    loginSuccess(state, { payload }) {
      state.sending = false;
      state.authenticated = true;
      state.session = payload;
      state.error = null;
    },
    loginFailure(state, { payload }) {
      state.sending = false;
      state.authenticated = false;
      state.error = payload;
    },
    logout(state) {
      state.authenticated = false;
      state.session = null;
    },
    setAuthenticated(state, { payload }) {
      state.authenticated = payload;
    },
    fetchSessionRequest(state) {
      state.loading = true;
    },
    fetchSessionSuccess(state, { payload }) {
      state.loading = false;
      state.authenticated = true;
      state.session = payload;
    },
    fetchSessionFailure(state) {
      state.loading = false;
      state.authenticated = false;
    }
  }
});

export default authSlice.reducer;

export const authSelector = state => state.auth;

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  fetchSessionRequest,
  fetchSessionSuccess,
  fetchSessionFailure,
  setAuthenticated,
  logout
} = authSlice.actions;

export const login = credentials => dispatch => {
  return new Promise(async (resolve, reject) => {
    dispatch(loginRequest());

    try {
      const response = await http.post('auth/login', credentials);
      dispatch(loginSuccess(response.data.user));
      localStorage.setItem('token', response.data.token);
      resolve();
    } catch (error) {
      const { status, data } = error.response;
      status === 422 ? reject(data.errors) : dispatch(loginFailure(data));
    }
  });
};

export const fetchSession = () => async dispatch => {
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(setAuthenticated(false));
    return;
  }

  dispatch(fetchSessionRequest());

  try {
    const response = await http.get('auth/profile');
    dispatch(fetchSessionSuccess(response.data.user));
  } catch {
    dispatch(fetchSessionFailure());
    localStorage.removeItem('token');
  }
};
