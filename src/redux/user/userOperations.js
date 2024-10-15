import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editInfo = createAsyncThunk(
    'users/info',
    async({ name, currency }, thunkAPI) => {
        try{
            const res = await axios.put('/users/info', { name, currency });
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const editAvatar = createAsyncThunk(
    'users/avatar',
    async({ url }, thunkAPI) => {
        try{
            const res = await axios.put('/users/avatar', { url });
            return res.data;
        }catch(error){return thunkAPI.rejectWithValue(error.message);}
    }
)

export const deleteAvatar = createAsyncThunk(
  'users/avatar',
  async (avatarId, thunkAPI) => {
    try {
      const response = await axios.delete('/users/avatar', avatarId);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
