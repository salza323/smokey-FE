import axios from 'axios';

const axiosWithAuth = () => {
  // grab the token from local storage to send with the request(s) in the header
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
