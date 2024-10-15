import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
import { register, logIn, logOut, refreshUser } from './authOperations';
import { authPersistConfig } from '../store';

// const [fetchSid, setFetchSid] = useState(null);
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, currency: null, avatarUrl: null, 
      categories: { incomes: [], expenses: [] },
      transactionsTotal: { incomes: 0, expenses: 0 }
    },
    accessToken: null,
    refreshToken: null,
    sid: null,
    isLoggedIn: false,
    isRefreshing: false,
  },//persist:auth
  // '"670574bcf1df95584aabd2c2"'
  // "\"670574bcf1df95584aabd2c2\""
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        console.log("register: authPersistConfig", authPersistConfig);
        // console.log("authPersistConfig", authPersistConfig.auth.sid);
        console.log(JSON.parse(localStorage.getItem('persist:auth')));
        // setFetchSid(JSON.parse(localStorage.getItem('persist:auth')));
        // console.log("state Sid: ", fetchSid);
        console.log(JSON.parse(localStorage.getItem('persist:auth')).sid);
        console.log("register: authPersistConfig", authPersistConfig.auth);
        console.log("register: authPersistConfig", authPersistConfig.key);
        console.log("register: authPersistConfig", authPersistConfig.whitelist);
        console.log("register: authPersistConfig", authPersistConfig.whitelist.sid);
        console.log("register: authPersistConfig", authPersistConfig.whitelist.state);
        console.log('Register successful:payload', action.payload);
        console.log('Register successful:payload.user', action.payload.user);
        console.log('Register successful:payload.accessToken', action.payload.accessToken);
        console.log('Register successful:payload.refreshToken', action.payload.refreshToken);
        console.log('Register successful:payload.sid', action.payload.sid);
        console.log('Register successful:state.user', state.user);
        console.log('Register successful:state.accessToken', state.accessToken);
        console.log('Register successful:state.refreshToken', state.refreshToken);
        console.log('Register successful:state.sid', state.sid);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        console.log("login: authPersistConfig", authPersistConfig);
        // console.log("authPersistConfig", authPersistConfig.auth.sid);
        console.log(JSON.parse(localStorage.getItem('persist:auth')));
        console.log(JSON.parse(localStorage.getItem('persist:auth'))?.sid);
        console.log("login: authPersistConfig", authPersistConfig.auth);
        console.log("login: authPersistConfig", authPersistConfig.key);
        console.log("login: authPersistConfig", authPersistConfig.whitelist);
        console.log("login: authPersistConfig", authPersistConfig.whitelist.sid);
        console.log("login: authPersistConfig", authPersistConfig.whitelist.state);
        console.log('Login successful:payload', action.payload);
        console.log('Login successful:payload.user', action.payload.user);
        console.log('Login successful:payload.accessToken', action.payload.accessToken);
        console.log('Login successful:payload.refreshToken', action.payload.refreshToken);
        console.log('Login successful:payload.sid', action.payload.sid);
        console.log('Login successful:state.user', state.user);
        console.log('Login successful:state.accessToken', state.accessToken);
        console.log('Login successful:state.refreshToken', state.refreshToken);
        console.log('Login successful:state.sid', state.sid);
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, currency: null, avatarUrl: null, 
          categories: { incomes: [], expenses: [] },
          transactionsTotal: { incomes: 0, expenses: 0 }
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
        console.log("logout: authPersistConfig", authPersistConfig);
        // console.log("authPersistConfig", authPersistConfig.auth.sid);
        console.log(JSON.parse(localStorage.getItem('persist:auth')));
        console.log(JSON.parse(localStorage.getItem('persist:auth')).sid);
        console.log("logout: authPersistConfig", authPersistConfig.auth);
        console.log("logout: authPersistConfig", authPersistConfig.key);
        console.log("logout: authPersistConfig", authPersistConfig.whitelist);
        console.log("logout: authPersistConfig", authPersistConfig.whitelist.sid);
        console.log("logout: authPersistConfig", authPersistConfig.whitelist.state);
        console.log('Logout successful:state.user', state.user);
        console.log('Logout successful:state.accessToken', state.accessToken);
        console.log('Logout successful:state.refreshToken', state.refreshToken);
        console.log('Logout successful:state.sid', state.sid);
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        console.log("refresh: authPersistConfig", authPersistConfig);
        // console.log("authPersistConfig", authPersistConfig.auth.sid);
        console.log(JSON.parse(localStorage.getItem('persist:auth')));
        console.log(JSON.parse(localStorage.getItem('persist:auth')).sid);
        console.log("refresh: authPersistConfig", authPersistConfig.auth);
        console.log("refresh: authPersistConfig", authPersistConfig.key);
        console.log("refresh: authPersistConfig", authPersistConfig.whitelist);
        console.log("refresh: authPersistConfig", authPersistConfig.whitelist.sid);
        console.log("refresh: authPersistConfig", authPersistConfig.whitelist.state);
        console.log('Refresh successful:payload', action.payload);
        console.log('Refresh successful:payload.user', action.payload.user);
        console.log('Refresh successful:payload.accessToken', action.payload.accessToken);
        console.log('Refresh successful:payload.refreshToken', action.payload.refreshToken);
        console.log('Refresh successful:payload.sid', action.payload.sid);
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;