import axios from 'axios';

function getFollowers() {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10')
    .then((response) => response.data.data);
}

export default getFollowers;
