import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://66b74ea67f7b1c6d8f1b7f74.mockapi.io',
});

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/campers');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
