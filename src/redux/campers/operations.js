import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b74ea67f7b1c6d8f1b7f74.mockapi.io/api',
});

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/campers');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
