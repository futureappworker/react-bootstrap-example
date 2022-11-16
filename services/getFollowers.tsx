import axios from 'axios';

type ConfigTypes = {
  page?: number,
  pageSize?: number,
};

function getFollowers(config: ConfigTypes) {
  const {
    page = 1,
    pageSize = 10,
  } = config;

  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}`)
    .then((response) => response.data.data);
}

export default getFollowers;
