import axios from 'axios';

// API base URL - automatically uses proxy in development, direct URL in production
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // If we get a 401 Unauthorized, the token is invalid
    if (error.response && error.response.status === 401) {
      // Remove invalid token
      localStorage.removeItem('token');
      
      // Only redirect if we're not already on the auth page
      if (window.location.pathname !== '/' && window.location.pathname !== '/auth') {
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (data) => api.post('/register', data),
  login: (data) => api.post('/login', data),
  forgotPassword: (data) => api.post('/forgot-password', data),
  validateResetToken: (token) => api.get(`/validate-reset-token/${token}`),
  resetPassword: (token, data) => api.post(`/reset-password/${token}`, data),
  test: () => api.get('/test'),
};

// Profile API calls
export const profileAPI = {
  getProfile: () => api.get('/profile'),
  setupProfile: (data) => api.post('/profile/setup', data),
  updateProfile: (data) => api.put('/profile', data),
  searchUserByUid: (uid) => api.get(`/user/${uid}`),
};

export default api;


// G-THUNDER Points API
export const pointsAPI = {
  getInfo: () => api.get('/points/info'),
  claimDaily: () => api.post('/points/claim-daily'),
  watchAd: () => api.post('/points/watch-ad'),
  convertXp: (xpAmount) => api.post('/points/convert-xp', { xpAmount }),
};

// Level Progress API
export const levelsAPI = {
  getProgress: () => api.get('/levels/progress'),
  completeLevel: (data) => api.post('/levels/complete', data),
};

// Code Validation API
export const validationAPI = {
  validateHTML: (data) => api.post('/validate/html', data),
  validateCSS: (data) => api.post('/validate/css', data),
  validateJS: (data) => api.post('/validate/javascript', data),
  validatePython: (data) => api.post('/validate/python', data),
  validateJava: (data) => api.post('/validate/java', data),
};
