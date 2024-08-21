// This composable uses the useQuery function from TanStack Query to fetch a random dog image from the Dog API.
import { useQuery } from '@tanstack/vue-query';
import axios from 'axios';

// first basic function to fetch one dog
// export default () => {
//   return useQuery({
//     queryKey: ['randomDog'],
//     queryFn: async () => {
//       const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//       return res.data.message;
//     },
//   });
// };

export default (count: number = 3) => {
  return useQuery({
    queryKey: ['randomDogs', count],
    queryFn: async () => {
      const res = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${count}`
      );
      return res.data.message;
    },
    enabled: false, // without this, the fetch would work automatically

    // error handling
    onError: (error) => {
      console.error('Error fetching dog images:', error);
    },
  });
};
