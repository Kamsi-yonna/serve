// This composable uses the useQuery function from TanStack Query to fetch a random dog image from the Dog API.
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

export default () => {
  return useQuery({
    queryKey: ['randomDog'],
    queryFn: async () => {
      const res = await axios.get('https://dog.ceo/api/breeds/image/random');
      return res.data.message;
    },
  });
};
