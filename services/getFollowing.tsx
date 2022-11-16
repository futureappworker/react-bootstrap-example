import axios from 'axios';

type ConfigTypes = {
  page?: number,
  pageSize?: number,
};

function getFollowing(config: ConfigTypes) {
  const {
    page = 1,
    pageSize = 10,
  } = config;

  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/friends?page=${page}&pageSize=${pageSize}`)
    .then((response) => response.data.data);
}

export default getFollowing;
