import { useMutation } from '@tanstack/vue-query';
import axios from 'axios';

const API_URL = 'https://66c6ac7f8b2c10445bc75865.mockapi.io/kamstack/';

export const useAuth = () => {
  // Sign Up Mutation
  const signUp = useMutation({
    mutationFn: async (userData: { username: string; password: string }) => {
      const res = await axios.post(`${API_URL}/register`, userData);
      return res.data;
    },
  });

  // Log In Mutation
  const logIn = useMutation({
    mutationFn: async (userData: { username: string; password: string }) => {
      // Fetch all users to check credentials
      const res = await axios.get(`${API_URL}/register`);
      const users = res.data;

      // Check if any user matches the provided username and password
      const user = users.find(
        (user: any) =>
          user.username === userData.username &&
          user.password === userData.password
      );

      if (!user) {
        throw new Error('Invalid username or password');
        console.log('wrong login');
      }

      return user; // Return the user object on successful login
    },
  });

  return {
    signUp,
    logIn,
    signUpStatus: signUp,
    logInStatus: logIn,
  };
};
