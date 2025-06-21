import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendOTP, signup, login, sendOTPForgetPass, resetPassword, googleLogin, googleSignup, refreshToken, getCookie, logout } from './authService';
import config from '../config';
const initialState = {
  user: getCookie('access_token') ? { token: getCookie('access_token') } : null,
  loading: false,
  error: null,
  isVerified: false,
  lastRefresh: null
};

// Add this function to clear local storage every 12 hours
const clearLocalStorageAfterInterval = async () => {
  const TWELVE_HOURS = 12 * 60 * 60 * 1000;
  const lastClearTime = localStorage.getItem('lastClearTime');
  const currentTime = Date.now();
  const refreshToken = localStorage.getItem('refresh_token');

  if (!lastClearTime || (currentTime - lastClearTime) >= TWELVE_HOURS) {
    try {
      if (refreshToken) {
        const response = await fetch(`${config.Backend_Api}/api/auth/token/refresh/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh: refreshToken })
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('access_token', data.access);
        }
      }
    } catch (error) {
      localStorage.clear();
    }
    
    localStorage.setItem('lastClearTime', currentTime.toString());
  }
};

// Call the function when the slice is initialized
clearLocalStorageAfterInterval();

export const sendUserOTP = createAsyncThunk(
  'auth/sendOTP',
  async (email, thunkAPI) => {
    try {
      return await sendOTP(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      return await signup(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const verifyUserOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (otpData, thunkAPI) => {
    try {
      return await verifyOTP(otpData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await login(credentials);
      localStorage.setItem('access_token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const googleLoginUser = createAsyncThunk(
  'auth/googleLogin',
  async (code, thunkAPI) => {
    try {
      const response = await googleLogin(code);
      if (response?.access && response?.refresh) {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
      }
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const googleSignupUser = createAsyncThunk(
  'auth/googleSignup',
  async (code, thunkAPI) => {
    try {
      const response = await googleSignup(code);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    try {
      return await refreshToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logout();
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendUserOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendUserOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendUserOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isVerified = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyUserOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyUserOTP.fulfilled, (state) => {
        state.loading = false;
        state.isVerified = true;
      })
      .addCase(verifyUserOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(googleLoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleLoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(googleLoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(googleSignupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(googleSignupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(googleSignupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.user = { token: action.payload };
        state.lastRefresh = Date.now();
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.lastRefresh = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, setUser } = authSlice.actions;
export default authSlice.reducer;
