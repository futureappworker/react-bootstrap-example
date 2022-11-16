import axios from 'axios';

type ConfigTypes = {
  page?: number,
  pageSize?: number,
  keyword?: string,
};

function getUsers(config: ConfigTypes) {
  const {
    page = 1,
    pageSize = 10,
    keyword = '',
  } = config;

  return axios.get(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
    .then((response) => ({
      total: response.data.total,
      totalPages: response.data.totalPages,
      page: response.data.page,
      pageSize: response.data.pageSize,
      list: response.data.data,
    }));
}

export default getUsers;
