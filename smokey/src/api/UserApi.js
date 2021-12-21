import axios from 'axios';

const UserApi = {
  registerNewUser: async (newUser) => {
    const response = await axios.post(
      'http://localhost:8001/api/auth/register',
      newUser
    );
    return response.data;
  },

  loginUser: async (existingUserLogin) => {
    const response = await axios.post(
      'http://localhost:8001/api/auth/login',
      existingUserLogin
    );
    return response.data;
  },
};

export default UserApi;
