import api from './service';

export const fetchUser = async () => {
  try {
    const response = await api.get('/api/v1/auth/user-profile');
    return response.data.user;
  } catch (error) {
    console.log('Error fetching user profile:', error);
    return null;
  }
};